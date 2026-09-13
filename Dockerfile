FROM node:20-bullseye AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm ci --include=optional --no-audit --no-fund; else npm install --include=optional --no-audit --no-fund; fi
COPY . .
RUN mkdir -p public
RUN ["node", "-e", "const fs=require(\"fs\"),path=require(\"path\"),sharp=require(\"sharp\");const MAX_EDGE=1920,MIN_BYTES=250000;const walk=(d)=>fs.existsSync(d)?fs.readdirSync(d,{withFileTypes:true}).flatMap((e)=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]):[];(async()=>{for(const file of walk(\"public\")){const ext=path.extname(file).toLowerCase();if(![\".jpg\",\".jpeg\",\".png\",\".webp\"].includes(ext))continue;const source=fs.readFileSync(file);if(source.length<MIN_BYTES)continue;try{const image=sharp(source,{failOn:\"none\"}).rotate().resize(MAX_EDGE,MAX_EDGE,{fit:\"inside\",withoutEnlargement:true});const out=await(ext===\".png\"?image.png({compressionLevel:9,palette:true,quality:80,effort:8}):ext===\".webp\"?image.webp({quality:80}):image.jpeg({quality:80,mozjpeg:true})).toBuffer();if(out.length>=source.length)continue;fs.writeFileSync(file,out);console.log(file+\": \"+source.length+\" -> \"+out.length);}catch(error){console.warn(file+\": \"+error.message)}}})();"]
RUN npm run build

FROM node:20-bullseye AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
RUN mkdir .next && chown nextjs:nodejs .next
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
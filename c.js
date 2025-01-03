const apis = `SG_04ba9b2415359195
SG_3dff10cf4fb58663
SG_6bf00f94e0da55d1
SG_ca99b720943f7a16
SG_21983ddc6abc82d1
SG_f4e31ba16bb1c49d
SG_7301a2d438dc9a33
SG_2ef181a4d119e951
SG_43fc3b6fe69f2452
`.split('\n').filter(el=>el)
let c = 0
for (let api of apis){
  
  const res = await fetch('https://api.segmind.com/v1/get-user-credits',{headers:{'x-api-key':api}} )
  const d = await res.json()
  c+= d.credits
}
console.log(c)
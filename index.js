const chairs = 6;
let partai = [{
      'partai': 'A',
      'suara': 24000,
      'divider': 1
    },
    {
      'partai': 'B',
      'suara': 15000,
      'divider': 1
    },
    {
      'partai': 'C',
      'suara': 9000,
      'divider': 1
    },
    {
      'partai': 'D',
      'suara': 5000,
      'divider': 1
    }
];
let max = [];
for(let i=1;i<=chairs;i++){
  partai.forEach((resp) => {
    let { suara, divider } = resp
    let result = suara / divider;
    max.push(
      result
    )
  })
  let index = max.indexOf(Math.max(...max));
  let result = Math.max(...max);
  partai[index].divider += 2
  console.log('pemenang kursi '+ i +' adalah ' + partai[index].partai + ' total suara ' + result)
  max = []
}
export const defaultImg = 'https://bit.ly/39TyMWy'

export const readable = (str: string) => {
  return str.replace(/([A-Z])/g, ' $1')
    .replace(/^./, function(str){
      return str.toUpperCase() 
    })
}

export const sortByTime = (arr: any[]) => {
  return arr.sort((x, y) => Date.parse(`2022/01/01 ${x.time.time}`) - Date.parse(`2022/01/01 ${y.time.time}`))
}
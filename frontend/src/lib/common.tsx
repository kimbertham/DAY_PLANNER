
export const readable = (str: string) => {
  return str.replace(/([A-Z])/g, ' $1')
    .replace(/^./, function(str){
      return str.toUpperCase() 
    })
}

export const defaultImg = 'https://bit.ly/39TyMWy'
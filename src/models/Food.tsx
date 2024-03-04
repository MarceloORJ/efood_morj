class Food {
  title: string
  desciption: string
  image: string
  info: string[]
  rate: number
  id: number

  constructor(
    id: number,
    title: string,
    desciption: string,
    image: string,
    info: string[],
    rate: number
  ) {
    this.id = id
    this.title = title
    this.desciption = desciption
    this.image = image
    this.info = info
    this.rate = rate
  }
}

export default Food

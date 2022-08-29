import {baseURL} from './baseURL'
import axios from 'axios'

// 4

// A = Async/Await pois prexisamos esperas se obtivemos successo ou não.

// B
type News = {
  title: string,
  content: string,
  date: number
}

const novaNoticia: News = {
  title: 'Back é melhor que Front',
  content: 'Já estpu me esquecendo do React',
  date: Date.now()
}

const createNews = async (news: News): Promise<News> => {
  const result = await axios.put(`${baseURL}/news`, news)
  return result.data
}

const main = async () => {
  try {
    const news = await createNews(novaNoticia)
    console.log("Noticia criada: " + novaNoticia.title)
  } catch (erro: any) {
    console.log(erro.response.data || erro.message)
  }
}

main()
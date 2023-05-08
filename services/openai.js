const { Configuration, OpenAIApi } = require('openai')
require('dotenv').config()

class OpenAIService {
    constructor(API_KEY) {

        const configuration = new Configuration({
          apiKey: API_KEY,
        })

        this.openai = new OpenAIApi(configuration)
    
    }

    // генерация сео-оптимизированной статьи по теме
    async createSEOArticle(subject, options) {
        
        if(!options) options = {}

        try {
            
            let params = {
                model: 'text-davinci-003',
                prompt: `Write SEO optimized article on subject: "${subject}" using HTML markup and inserting small code examples`,
                max_tokens: 3900,
                ...options
            }
    
            let { data: { choices: text } } = await this.openai.createCompletion(params)
            
            text = text[0].text
            params = {
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: 
                    `Summarise it:
                    ${text}`
                }] 
            }

            let { data: { choices: snippet } } = await this.openai.createChatCompletion(params)

            snippet = snippet[0].message.content
            
            return {
                text,
                snippet
            }

        } catch(e) {
            return e
        }

    }
    
    // генерация тем для статей на сайт
    async generateSubjectsForArticles(n) {
        if(!n) n = 50

        try {
            
            let params = {
                model: 'text-davinci-003',
                prompt: `Generate ${n} subjects for SEO-optimized articles on blog website about ${process.env.BLOG}. Subjects should be relevant for any-level developers`,
                max_tokens: 3900,
            }
    
            let { data: { choices: response } } = await this.openai.createCompletion(params)

            return response

        } catch(e) {
            return e
        }
    }

}

module.exports = OpenAIService
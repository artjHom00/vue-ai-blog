const { Configuration, OpenAIApi } = require('openai');

class OpenAIService {
    constructor(API_KEY) {

        const configuration = new Configuration({
          apiKey: API_KEY,
        })

        this.openai = new OpenAIApi(configuration)
    
    }

    async createSEOArticle(subject, options) {
        
        if(!options) options = {}

        try {
            
            let params = {
                model: 'text-davinci-003',
                prompt: `Write SEO optimized article on subject: "${subject}" using HTML markup and inserting small code examples`,
                max_tokens: 3000,
                ...options
            }
    
            let { data: { choices: response } } = await this.openai.createCompletion(params)

            return response

        } catch(e) {
            console.log("🚀 ~ file: openai.js:32 ~ OpenAIService ~ createSEOArticle ~ e:", e)
            return e
        }

    }

}

module.exports = OpenAIService
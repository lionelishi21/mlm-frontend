import Api from '../index.js'


export default {
    downloadEbook() {
        return Api().get('/download-ebook')
    }
}
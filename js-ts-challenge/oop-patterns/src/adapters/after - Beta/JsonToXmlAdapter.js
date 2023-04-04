class JsonToXmlAdapter {
    constructor(newReader){
        this.reader = newReader
    }

    read(){
       const data = this.reader.read()
       //TODO
       return "<xml>"
    }
}
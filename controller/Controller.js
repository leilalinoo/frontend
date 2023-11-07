import DataService from "../model/DataService.js"
const ALAPVEGPONT = "http://localhost:8000/writers"
class Controller{
    constructor(){
        this.dataservice = new DataService()
        this.dataservice.getData("http://localhost:8000/writers" , this.megjelenit)
        this.dataservice.postData(ALAPVEGPONT,{
            "nev" : "Valaki",
            "szul":1589,
        })

    }
    megjelenit(list){
        console.log(list)
    }
}
export default Controller
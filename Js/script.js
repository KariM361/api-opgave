import getDogImages from "./module/api.js"
import { view } from "./module/view/view.js"
//importerer funktionen getDogImages fra din api.js modulfil.
getDogImages( 15)
.then((data)=>{
  view(data)
})
//kalder getDogImages med tallet 15 (henter 15 billeder).
//når billederne er hentet, kaldes view funktionen med data.


 


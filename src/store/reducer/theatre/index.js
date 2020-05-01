import theatreListInit from "../../state/theatre/index"
export default function(state=theatreListInit,{type,payload}){
    state=JSON.parse(JSON.stringify(state))
    return state
}
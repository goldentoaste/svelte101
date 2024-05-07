import { writable } from "svelte/store";

function isBrowser(){
    return window !== undefined;
}

export function localStore(key:string, defaultVal: String){

    let val  =  undefined;

    if(isBrowser()){
        val = localStorage.getItem(key);
    }

    const {subscribe, set, update}= writable<String>(val == null ? defaultVal : val);

    return {
        subscribe,
        set: (newVal: string)=>{
            if(isBrowser()){
                set(newVal);
                localStorage.setItem(key, newVal);
            }
        }
    }
}
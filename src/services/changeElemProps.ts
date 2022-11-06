import { themeElems, root } from "../const/data"

export const changeElemProps = (theme: string): void => {
    
    themeElems.forEach(({prop, postfix, prefix}) => {
        root.style.setProperty(prop, `var(${prefix}${theme}${postfix})`)
    })
}
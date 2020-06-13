/**
 * Created by Administrator on 2020/6/13.
 */
function simplifyPath(path: string): string {
    // 用栈
    let tmp: string[] = path.split("/");
    let res: string[] =[];
    if( path === "" ){
        return "";
    }
    tmp.forEach( (path) => {
        if( path !== "" ){
            if( path === ".." ){
                res.pop();
            }else if( path !== "." ){
                res.push("/" + path);
            }
        }
    });
    return res.join("") !== "" ? res.join(""): "/";
}
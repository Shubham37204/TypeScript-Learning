//Purpose of Discriminated Union in TypeScript
// The main purpose of a discriminated union is:

// ✅ To safely handle multiple types in a union using a common, unique field to tell them apart 
// — without needing type assertions (as) or manual checks.


//eg1
type Log = Warning | Info | Success;
interface Warning {
    type: "warning";
    msg: string;
}
interface Info {
    type: "info";
    text: string;
}
interface Success {
    type: "success";
    message: string;
}

function handleMsg(log: Log) {
    switch (log.type) {
        case "warning":
            console.log(log.msg)
            break;
        case "info":
            console.log(log.text)
            break;
        case "success":
            console.log(log.message)
            break;
    }
}

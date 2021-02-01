global['FB'] = {
    getLoginStatus(callback: (response: fb.StatusResponse) => void, roundtrip?: boolean): void {},
    Event: {
        subscribe(event: "auth.statusChanged", callback: (response: fb.StatusResponse) => void) {},
        unsubscribe(event: "auth.statusChanged", callback: (response: fb.StatusResponse) => void) {},
    },
};
global['FB'] = {
    getLoginStatus(callback: (response: fb.StatusResponse) => void, roundtrip?: boolean): void {
        // Do nothing
    },
    Event: {
        subscribe(event: "auth.statusChanged", callback: (response: fb.StatusResponse) => void) {
            // Do nothing
        },
        unsubscribe(event: "auth.statusChanged", callback: (response: fb.StatusResponse) => void) {
            // Do nothing
        },
    },
};
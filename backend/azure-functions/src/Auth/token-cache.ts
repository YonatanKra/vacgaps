class TokenCacheNode {
    token: string;
    expiration: number;
    prev: TokenCacheNode;
    next: TokenCacheNode;
}

const expirationGap: number = 60000 * 5; // 5 minutes

export function IsExpired(expiration: number) {
    return expiration < Date.now() + expirationGap;
}

export class TokenCache {
    private keyed: Map<string, TokenCacheNode>;
    private head: TokenCacheNode;
    private tail: TokenCacheNode;
    private count: number;

    constructor() {
        this.keyed = new Map<string, TokenCacheNode>();
        this.head = new TokenCacheNode();
        this.tail = new TokenCacheNode();
        this.count = 0;
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    public isCachedValidToken(token: string): boolean {
        if (!this.keyed.has(token)) {
            return false;
        }

        let node: TokenCacheNode = this.keyed.get(token);

        this.removeNodeFromList(node);

        if (IsExpired(node.expiration)) {
            this.keyed.delete(token);
            --this.count;
            return false;
        }

        this.addNodeToList(node);
        
        return true;
    }

    public addToken(token: string, expiration: number) {
        if (this.count < 1000) {
            ++this.count;
        } else {
            let last: TokenCacheNode = this.tail.prev;
            this.keyed.delete(last.token);
            this.removeNodeFromList(last);
        }

        let node: TokenCacheNode = new TokenCacheNode();
        node.token = token;
        node.expiration = expiration;
        
        this.keyed.set(token, node);
        this.addNodeToList(node);
    }

    private addNodeToList(node: TokenCacheNode) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }

    private removeNodeFromList(node: TokenCacheNode) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
}
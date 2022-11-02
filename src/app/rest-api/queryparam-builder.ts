interface QueryParam {
    key: string;
    value: string;
}

export class QueryParamBuilder {
    
    params: QueryParam[] = [];

    addParam(key: string, value: string): QueryParamBuilder {
        this.params.push({key: key, value: value});
        return this;
    }

    clear() {
        this.params = [];
    }

    build() : string {
        let separator = "?";
        let result = "";
        for (let param of this.params) {
            result += separator + param.key + "=" + param.value;
            separator = "&";
        }
        return result;
    }

}
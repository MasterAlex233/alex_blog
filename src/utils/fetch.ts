const fetch = {
	staticUrl: 'http://localhost:3000',
	basicUrl: 'http://localhost:3001/',
	get<T>(url: string) {
		return new Promise<T>((resolve, reject) => {
			window.fetch(this.basicUrl + url, { method: 'get' })
				.then((response) => {
					if (response.status !== 200) {
						throw new Error(response.statusText)
					}
					return response.json()
				})
				.then(data => {
					resolve(data)
				})
				.catch(error => {
					reject(error)
				})
		})
	},
	getStatic(url: string) {
		return new Promise<string>((resolve, reject) => {
			window.fetch(this.staticUrl + url, { method: 'get' })
				.then((response) => {
					if (response.status !== 200) {
						throw new Error(response.statusText)
					}
					return response.text()
				})
				.then(data => {
					resolve(data)
				})
				.catch(error => {
					reject(error)
				})
		})
	}
}

export default fetch
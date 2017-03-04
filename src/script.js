class App {
	constructor(a, b) {
		this.a = a;
		this.b = b;
	}

	
	test() {
		return 1111;
	}
}

class MyApp extends App {
	constructor(z, g) {
		super(z, g);
		
	}
}


const app = new MyApp(12, 66);

console.log(app);
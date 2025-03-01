export default defineConfig({
	server: {
		proxy: {
			"/api": {
				target: "https://chat-app-mern-stack-jf9b.onrender.com",
				changeOrigin: true,
				secure: false,
			},
		},
	},
});

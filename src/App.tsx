import { Provider } from "react-redux";
import "./App.css";
import MainPage from "./MainPage";
import store from "./redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
function App() {
	return (
		<div className="relative flex flex-col item-center px-8 w-screen h-screen">
			<div className="main flex w-full h-full sm:px-8">
				<div className="max-w-7xl flex lg:px-8 h-full w-full jusify-center my-10">
					<QueryClientProvider client={queryClient}>
						<Provider store={store}>
							<MainPage />
						</Provider>
					</QueryClientProvider>
				</div>
			</div>
		</div>
	);
}

export default App;

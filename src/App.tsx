import { Environment, FetchFunction, Network, Observable, RecordSource, Store} from "relay-runtime";
import { RelayEnvironmentProvider } from "react-relay"
import { Issues } from './Issues';
import { Suspense } from 'react';

const fetchFunction: FetchFunction = (params, variables) => {
  const response = fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: [["Content-Type", "application/json"], ["Authorization", `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`]],
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });

  return Observable.from(response.then((data) => data.json()));
};

function createEnvironment() {
  const network = Network.create(fetchFunction);
  const store = new Store(new RecordSource(), {
    gcReleaseBufferSize: 0
  });
  return new Environment({ store, network });
}

const relayEnvironment = createEnvironment();

function App() {
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <Suspense fallback={<div>Loading...</div>}>
        <Issues />
      </Suspense>
    </RelayEnvironmentProvider>
  )
}

export default App

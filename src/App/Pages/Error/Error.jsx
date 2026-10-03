import { ReactComponent as Error404 } from './404.svg';
import { Layout } from '../Layout/Layout';
import './Error.scss';

function Error() {
    return (
        <Layout className="error">
            <Error404 />
        </Layout>
    );
}

export { Error };
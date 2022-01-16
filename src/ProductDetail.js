import { useParams, Link } from 'react-router-dom'
import Title from './Title'

export default function ProductDetail() {

    let params = useParams()

    return (
        <div>
            <Title mainTitle={params.id + "Product information"} />

            <Link to ="/">Back to the Home Page</Link>
        </div>
    )
}

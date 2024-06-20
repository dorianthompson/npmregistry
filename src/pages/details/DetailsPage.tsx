import { detailsLoader, type DetailsLoaderResult } from "./detailsLoader";
import { useLoaderData } from "react-router-dom";

export default function DetailsPage() {
    const { details } = useLoaderData() as DetailsLoaderResult;

    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-bold my-4">
                {details.name}
            </h1>

            {details.description && <div>
                <h3 className="text-lg font-bold">
                    Description
                </h3>
                <div className="p-3 bg-gray-200 rounded">
                    {details.description}
                </div>
            </div>}

            {details.license && <div>
                <h3 className="text-lg font-bold">
                    License
                </h3>
                <div className="p-3 bg-gray-200 rounded">
                    {details.license}
                </div>
            </div>} 

            {details.author?.name && <div>
                <h3 className="text-lg font-bold">
                    Author
                </h3>
                <div className="p-3 bg-gray-200 rounded">
                    {details.author?.name}
                </div>
            </div>}

            {details.readme && <div>
                <h3 className="text-lg font-bold">
                    ReadMe
                </h3>
                <div className="p-3 bg-gray-200 rounded">
                    {details.readme}
                </div>
            </div>}


            {details.maintainers && <div>
                <h3 className="text-lg font-bold">
                    Maintainers
                </h3>
                <div className="p-3 bg-gray-200 rounded">
                    {details.maintainers.map((maintainer) => {
                        return <div key={maintainer.email}>{maintainer.name} - {maintainer.email} </div>
                    })}
                </div>
            </div>}


        </div>
    )
}
import API from '@/lib/baseUrl';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ViewBlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const [data, setData] = React.useState<any>(null);

    const getSingleBlogData = async () => {
        await API.get(`/user/get-single-blog-data/${slug}`).then((res) => {
            setData(res.data.post);
        });
    };

    useEffect(() => {
        getSingleBlogData();
    }, []);

    return (
        <div className="max-w-2xl mx-auto p-4">
            {data ? (
                <>
                    <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
                    <div className="prose" dangerouslySetInnerHTML={{ __html: data.content }} />
                </>
            ) : (
                <p className="text-center text-lg">Loading...</p>
            )}
        </div>
    );
};

export default ViewBlogPost;

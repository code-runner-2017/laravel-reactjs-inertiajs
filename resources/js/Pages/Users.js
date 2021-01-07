import React from 'react';
import Layout from '@/Shared/Layout';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';

export default (props) => {
    return (
        <Layout>
            <h1>Users:</h1>
            <div>
                {props.users.map((value, index) => {
                    return <li key={index}>{value.name} ({value.email})</li>
                })}
            </div>
        </Layout>
    );
};


import React from 'react';
import Layout from '@/Shared/Layout';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';

export default (props) => {
    return (
        <Layout>
            <h1>
                Hello, {props.name}!
            </h1>
            <div>
                <InertiaLink href="users">Users</InertiaLink>
            </div>
        </Layout>
    );
};

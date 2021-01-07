import React from 'react';

export default function Layout({ children }) {
    return (
        <div>
            <div className="flex flex-col">
                <div className="h-screen flex flex-col">
                    <div className="flex flex-grow overflow-hidden">
                        {/* To reset scroll region (https://inertiajs.com/pages#scroll-regions) add `scroll-region="true"` to div below */}
                        <div className="w-full overflow-hidden px-4 py-8 md:p-12 overflow-y-auto">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

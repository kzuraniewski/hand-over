import React from 'react';

export default function Container({ children, className }) {
	return <div className={`Container ${className}`}>{children}</div>;
}

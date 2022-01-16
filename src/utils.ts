import React from "react"

export interface NavLinkProps extends React.HTMLAttributes<HTMLElement> {
    href: string
    children: JSX.Element | string
}
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode
}

export interface SpinnerProps {
    color: string
}
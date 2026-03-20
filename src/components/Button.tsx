import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link } from "react-router-dom";

type BaseProps = {
    textOnly?: boolean;
    children: ReactNode;
}

type LinkProps = BaseProps & ComponentPropsWithoutRef<typeof Link> & { to: string; };

type ButtonProps = BaseProps & ComponentPropsWithoutRef<'button'> & { to?: never; };

type ButtonLinkProps = LinkProps | ButtonProps;

// if the props has a "to" property it is a link
const isRouterLink = (props: ButtonLinkProps) => {
    return "to" in props;
}

export const Button = (props: ButtonLinkProps) => {

    if(isRouterLink(props)){
        const { children, textOnly, ...otherProps} = props as LinkProps;
        return (<Link className={`button ${textOnly&& "button--text-only"}`} {...otherProps}>
            {children}
            </Link>);
    }

    const { children, textOnly, ...otherProps} = props as ButtonProps;

    return (<button className={`button ${textOnly && "button--text-only"}`} {...otherProps}>
        {children}
        </button>);
}
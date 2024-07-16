'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function FloatingMenu(props) {

    let pathname = usePathname();

    if( props.type === 'meet' ) {
        console.log('asdas')
    }
    

    return (
        <div className="floatingMenu">
            <Link href={{ pathname: pathname + '/create', query : 'type=' + props.type }}>
                <img src="/icon_plus_white.png" alt="+" />
            </Link>
        </div>
    )
};
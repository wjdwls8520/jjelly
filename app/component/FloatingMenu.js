'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingMenu() {

    const pathname = usePathname()

    return (
        <div className="floatingMenu">
            <Link href={{ pathname: pathname + '/create' }}>
                <img src="/icon_plus_white.png" alt="+" />
            </Link>
        </div>
    )
};
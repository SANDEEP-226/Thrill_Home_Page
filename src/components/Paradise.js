import React from 'react'
import styles from '../css/Paradise.module.css'
import ParadiseCard from './ParadiseCard'
export default function Paradise() {
    return (
        <div className={styles.container}>
            <ParadiseCard
                title="Trending Adventures"
                imgUrl="https://www.google.com/search?q=black+image&rlz=1C1JZAP_enIN925IN925&sxsrf=AOaemvKjA_du8Yyui2zQH5ZF0J5S04xbgQ:1642421092854&tbm=isch&source=iu&ictx=1&vet=1&fir=H8fghKe9c4QqeM%252CNM6edSj1OFa7GM%252C_%253B-I8l415vxjtEOM%252C6qnB4_b-eBCkpM%252C_%253BwD7_s3xZHElenM%252CS4h2dFp_R9khWM%252C_%253Bn91YBawmMl5YoM%252CNM6edSj1OFa7GM%252C_%253BzLuYEEZBaXB6mM%252C8u4R1epCWUJROM%252C_%253BxTZ69ca4Lp1W5M%252CBBuMy5aN4aj-9M%252C_%253BhtKApHJmXGMpcM%252CNM6edSj1OFa7GM%252C_%253BfFvjyfKsOm1WUM%252CtRgt6jD982laZM%252C_%253B6adBDsnwAR5hRM%252CNM6edSj1OFa7GM%252C_%253B8XVb1Va1FqTrsM%252C8u4R1epCWUJROM%252C_%253B7FGPbHRGg36VBM%252CKS_SRqDfGIpCPM%252C_%253B46JPxlRHr1JWcM%252CraesZ5JE3kRMwM%252C_%253B8uO4CXnHcghAJM%252CmArwsttuct3ACM%252C_%253BiAUUuicbwUB75M%252CSPQDbzCD_hiEAM%252C_%253Bh2Q1rMVFLeRbaM%252CFCC5C-JN8FW-MM%252C_%253BKtFuFvgzxXB4hM%252CnX8TPpbX98zuWM%252C_%253B4zpR_yIUcW_gvM%252C8u4R1epCWUJROM%252C_&usg=AI4_-kR8tJFIsh9D32ihehh6kH3nW21YTg&sa=X&sqi=2&ved=2ahUKEwip_72u37j1AhVWIUQIHS12BhEQ9QF6BAgJEAE#imgrc=-I8l415vxjtEOM"
                content="value"
                />
        </div>
    )
}

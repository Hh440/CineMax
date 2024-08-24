
import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages:{
        signIn:"/"
    }
})

export const config={
    matcher:[
        "/display/:path*",
        "/theatre/:path*",
        "/movies/showtime/:path*",
        "/coupon/:path*",
        "/selection/:path*",
        "/payment/:path*"
    ]

}

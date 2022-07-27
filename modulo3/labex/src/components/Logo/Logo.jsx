import {Logo as LogoContainer} from "./style"

function Logo() {
    return (
        <LogoContainer>
            <div className="loader" />
            <div className="circle"></div>
            <div className="loader internal" />
        </LogoContainer>
    )
}

export default Logo;
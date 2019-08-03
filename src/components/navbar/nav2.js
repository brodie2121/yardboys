        <Navbar style={{ border: 'solid 1px #00D1B2', margin: '0' }}>
        <NavbarBrand>
            <NavbarItem>
                <img src={brand} style={{ marginRight: 5 }} /> Bloomer
            </NavbarItem>
            <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
        </NavbarBrand>
        <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
            <NavbarStart>
                <NavbarItem href='/'>Home</NavbarItem>
                <NavbarItem hasDropdown isHoverable>
                    <NavbarLink href='#/documentation'>Documentation</NavbarLink>
                    <NavbarDropdown>
                        <NavbarItem href="/jobboard/all">Job Board</NavbarItem>
                        <NavbarDivider />
                        <NavbarItem href='/spraychart/all'>Spraychart</NavbarItem>
                        <NavbarDivider />
                        <NavbarItem href="/employee/all">Yard Boys</NavbarItem>
                    </NavbarDropdown>
                </NavbarItem>
            </NavbarStart>
        </NavbarMenu>
        </Navbar>



import { Navbar, NavbarStart, NavbarEnd, NavbarItem, NavbarBrand, brand, Icon, NavbarBurger, NavbarMenu, NavbarLink, NavbarDropdown, NavbarDivider, Field, Control, Button  } from "bloomer";
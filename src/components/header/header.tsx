import styles from './header.module.css';
import TaskFlowNoTitle from '../../assets/logo_without_title.svg'
import { useState } from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'; 
import {
  CButton,
  CCollapse,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CFormInput,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
} from '@coreui/react'

function Header() { 
    const [visible, setVisible] = useState(false)
    return (
    <CNavbar expand="lg" className={styles.Navbar}>
      <CContainer fluid>
        <img src={TaskFlowNoTitle} alt="TaskFlowLogo" style={{ height: '40px', marginRight: '10px'}} />
        <CNavbarBrand href="#">TaskFlow</CNavbarBrand>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <></>
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="me-auto">
            <CNavItem>
              <CNavLink href="#" active>
                Home
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">Calendar</CNavLink>
            </CNavItem>
            <CDropdown variant="nav-item" popper={false}>
              <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="./ok">Another action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Something else here</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CNavItem>
              <CNavLink href="#" disabled>
                Disabled
              </CNavLink>
            </CNavItem>
          </CNavbarNav>
          <CForm className="d-flex">
            <CFormInput type="search" className="me-2" placeholder="Search" />
            <CButton type="submit" color="success" variant="outline">
              Search
            </CButton>
          </CForm>
        </CCollapse>
      </CContainer>
    </CNavbar>
  )
}

export default Header;

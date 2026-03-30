export interface NavItem {
  title: string;
  path: string;
  icon: string;
}

export interface SchoolFacility {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

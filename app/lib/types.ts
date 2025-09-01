export type MongoNoteType = {
    _id: string;
    title: string;
    content: string;
    author: string;
    pinned: boolean;
  }

  export type Cloudinary = {
    public_id: string
    display_name: string
  }

  export type JsonUserType = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }

  interface AccessKeyInfo {
    access_key: string
  }

  export interface CloudinaryAsset {
    asset_id: string
    public_id: string
    asset_folder: string
    filename: string
    display_name: string
    format: string
    version: number
    resource_type: string
    type: string
    created_at: string
    uploaded_at: string
    bytes: number
    backup_bytes: number
    width: number
    height: number
    aspect_ratio: number
    pixels: number
    url: string
    secure_url: string
    status: string
    access_mode: string
    access_control: null
    etag: string
    created_by: AccessKeyInfo
    uploaded_by: AccessKeyInfo
  }
  
  export interface AssetsPromiseResponse {
    success: boolean
    response: CloudinaryAsset[]
    message: string
  }
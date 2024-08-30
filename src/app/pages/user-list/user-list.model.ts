import { FilterTableColumn } from '../shared/filter-table/filter-table.model';
export interface User {
  avatar_url: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  id: number
  login: string
  node_id: string
  organizations_url: string
  received_events_url: string
  repos_url: string
  score: number
  site_admin: boolean
  starred_url: string
  subscriptions_url: string
  type: string
  url: string
}

export interface UserResponse {
  incomplete_results: boolean;
  items: User[]
  total_count: number
}

export const userListTableColumns: FilterTableColumn<Partial<User>>[] = [
  {
    title: 'Name',
    property: 'login',
    filterFn: null,
    filterMultiple: false,
    listOfFilter: [],
    sortDirections: [null],
    sortFn: null,
    searchable: false,
  },
  {
    title: 'User Id',
    property: 'id',
    filterFn: null,
    filterMultiple: false,
    listOfFilter: [],
    sortDirections: [null],
    sortFn: null,
    searchable: false,
  },
  {
    title: 'Git link',
    property: 'html_url',
    filterFn: null,
    filterMultiple: false,
    listOfFilter: [],
    sortDirections: [null],
    sortFn: null,
    searchable: false,
  },
]

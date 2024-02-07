import {authenticationRepository} from '../libs/app/repository'

import {addUser_useCases,userLogin_useCase} from '../libs/usecases'

const useCase:any={
    addUser_useCases,
    userLogin_useCase
}
const repository:any={
    authenticationRepository
}

export default {
    useCase,repository
}
import {chatRepository} from '../libs/app/repository'
import {get_message_usecase} from '../libs/usecase'

const useCase: any = {
 get_message_usecase
    };
    const repository: any = {
        repository:chatRepository
    };
    
    export default {
      useCase,
      repository,
    };
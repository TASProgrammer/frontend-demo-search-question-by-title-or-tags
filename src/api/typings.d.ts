declare namespace API {


  type BaseResponsePageQuestionVO_ = {
    code?: number;
    data?: PageQuestionVO_;
    message?: string;
  };


  type OrderItem = {
    asc?: boolean;
    column?: string;
  };


  type PageQuestionVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: QuestionVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };



  type QuestionQueryRequest = {
    answer?: string;
    content?: string;
    current?: number;
    id?: number;
    notId?: number;
    pageSize?: number;
    questionBankId?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    tags?: string[];
    title?: string;
    userId?: number;
  };

  type QuestionVO = {
    answer?: string;
    content?: string;
    createTime?: string;
    id?: number;
    tagList?: string[];
    title?: string;
    updateTime?: string;
    user?: UserVO;
    userId?: number;
  };


  type UserVO = {
    createTime?: string;
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };
}

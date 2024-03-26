<div align="center">

[![Visit Clayhr](./header.png)](https://clayhr.com)

# [Clayhr](https://clayhr.com)<a id="clayhr"></a>

API Documentation

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`clayhr.announcement.createNewAnnouncement`](#clayhrannouncementcreatenewannouncement)
  * [`clayhr.announcement.getAttachmentsById`](#clayhrannouncementgetattachmentsbyid)
  * [`clayhr.announcement.getById`](#clayhrannouncementgetbyid)
  * [`clayhr.announcement.updateAnnouncement`](#clayhrannouncementupdateannouncement)
  * [`clayhr.authentication.getAccessToken`](#clayhrauthenticationgetaccesstoken)
  * [`clayhr.candidates.extractPdfResume`](#clayhrcandidatesextractpdfresume)
  * [`clayhr.candidates.get`](#clayhrcandidatesget)
  * [`clayhr.candidates.getBasicDetails`](#clayhrcandidatesgetbasicdetails)
  * [`clayhr.candidates.getCandidateDetailByRecruitid`](#clayhrcandidatesgetcandidatedetailbyrecruitid)
  * [`clayhr.candidates.submitNewCandidate`](#clayhrcandidatessubmitnewcandidate)
  * [`clayhr.customFields.getById`](#clayhrcustomfieldsgetbyid)
  * [`clayhr.customFields.getCustomFields`](#clayhrcustomfieldsgetcustomfields)
  * [`clayhr.customFields.getCustomLists`](#clayhrcustomfieldsgetcustomlists)
  * [`clayhr.customFields.getValue`](#clayhrcustomfieldsgetvalue)
  * [`clayhr.customFields.updateValue`](#clayhrcustomfieldsupdatevalue)
  * [`clayhr.dependents.deleteByContactId`](#clayhrdependentsdeletebycontactid)
  * [`clayhr.documentLibrary.getAttachments`](#clayhrdocumentlibrarygetattachments)
  * [`clayhr.documentLibrary.getDocumentAsByteArray`](#clayhrdocumentlibrarygetdocumentasbytearray)
  * [`clayhr.expenseReports.createNew`](#clayhrexpensereportscreatenew)
  * [`clayhr.expenseReports.createNewExpenseItem`](#clayhrexpensereportscreatenewexpenseitem)
  * [`clayhr.expenseReports.deleteExpenseReport`](#clayhrexpensereportsdeleteexpensereport)
  * [`clayhr.expenseReports.getByUserId`](#clayhrexpensereportsgetbyuserid)
  * [`clayhr.expenseReports.getCurrencies`](#clayhrexpensereportsgetcurrencies)
  * [`clayhr.expenseReports.getExpenseTypes`](#clayhrexpensereportsgetexpensetypes)
  * [`clayhr.expenseReports.getReportDetails`](#clayhrexpensereportsgetreportdetails)
  * [`clayhr.expenseReports.submitExpenseReport`](#clayhrexpensereportssubmitexpensereport)
  * [`clayhr.feedback.listFeedback`](#clayhrfeedbacklistfeedback)
  * [`clayhr.forms.getAssignedForms`](#clayhrformsgetassignedforms)
  * [`clayhr.forms.getDetails`](#clayhrformsgetdetails)
  * [`clayhr.forms.getDynaForm`](#clayhrformsgetdynaform)
  * [`clayhr.forms.getFormResponse`](#clayhrformsgetformresponse)
  * [`clayhr.forms.getFormResponses`](#clayhrformsgetformresponses)
  * [`clayhr.forms.saveFormResponse`](#clayhrformssaveformresponse)
  * [`clayhr.forms.submitItemResponse`](#clayhrformssubmititemresponse)
  * [`clayhr.goals.createNewGoal`](#clayhrgoalscreatenewgoal)
  * [`clayhr.goals.deleteGoal`](#clayhrgoalsdeletegoal)
  * [`clayhr.goals.getAllGoals`](#clayhrgoalsgetallgoals)
  * [`clayhr.goals.getGoal`](#clayhrgoalsgetgoal)
  * [`clayhr.goals.getUserGoals`](#clayhrgoalsgetusergoals)
  * [`clayhr.invoice.getByProjectId`](#clayhrinvoicegetbyprojectid)
  * [`clayhr.jobProfiles.getJobProfiles`](#clayhrjobprofilesgetjobprofiles)
  * [`clayhr.leaves.addPtoBalance`](#clayhrleavesaddptobalance)
  * [`clayhr.leaves.createNewLeave`](#clayhrleavescreatenewleave)
  * [`clayhr.leaves.getLeaveRequestsWithinDateRange`](#clayhrleavesgetleaverequestswithindaterange)
  * [`clayhr.leaves.getLeavesBasedOnRole`](#clayhrleavesgetleavesbasedonrole)
  * [`clayhr.leaves.getRemainingHoursCredit`](#clayhrleavesgetremaininghourscredit)
  * [`clayhr.leaves.processLeaveById`](#clayhrleavesprocessleavebyid)
  * [`clayhr.objective.getByUserIdOrSpecificObjectiveById`](#clayhrobjectivegetbyuseridorspecificobjectivebyid)
  * [`clayhr.orgUnits.createNewOrgUnit`](#clayhrorgunitscreateneworgunit)
  * [`clayhr.orgUnits.getOrgUnits`](#clayhrorgunitsgetorgunits)
  * [`clayhr.orgRelation.getAllActive`](#clayhrorgrelationgetallactive)
  * [`clayhr.orgRelation.getOrgRelationsByUser`](#clayhrorgrelationgetorgrelationsbyuser)
  * [`clayhr.orgRelation.saveUser`](#clayhrorgrelationsaveuser)
  * [`clayhr.payStubs.getDetails`](#clayhrpaystubsgetdetails)
  * [`clayhr.peopleAndPermissions.addReportsTo`](#clayhrpeopleandpermissionsaddreportsto)
  * [`clayhr.peopleAndPermissions.createOrUpdateUserDetails`](#clayhrpeopleandpermissionscreateorupdateuserdetails)
  * [`clayhr.peopleAndPermissions.createUser`](#clayhrpeopleandpermissionscreateuser)
  * [`clayhr.peopleAndPermissions.createUserCompensation`](#clayhrpeopleandpermissionscreateusercompensation)
  * [`clayhr.peopleAndPermissions.deleteUserAddress`](#clayhrpeopleandpermissionsdeleteuseraddress)
  * [`clayhr.peopleAndPermissions.deleteUserEducation`](#clayhrpeopleandpermissionsdeleteusereducation)
  * [`clayhr.peopleAndPermissions.deleteUserEmployment`](#clayhrpeopleandpermissionsdeleteuseremployment)
  * [`clayhr.peopleAndPermissions.getAllUsersDetails`](#clayhrpeopleandpermissionsgetallusersdetails)
  * [`clayhr.peopleAndPermissions.getBasicUserDetails`](#clayhrpeopleandpermissionsgetbasicuserdetails)
  * [`clayhr.peopleAndPermissions.getFinancialRecord`](#clayhrpeopleandpermissionsgetfinancialrecord)
  * [`clayhr.peopleAndPermissions.getFinancialStatus`](#clayhrpeopleandpermissionsgetfinancialstatus)
  * [`clayhr.peopleAndPermissions.getUserBasicInformation`](#clayhrpeopleandpermissionsgetuserbasicinformation)
  * [`clayhr.peopleAndPermissions.getUserDetails`](#clayhrpeopleandpermissionsgetuserdetails)
  * [`clayhr.peopleAndPermissions.getUserList`](#clayhrpeopleandpermissionsgetuserlist)
  * [`clayhr.peopleAndPermissions.getUserPermissionsAndMenuConfigurations`](#clayhrpeopleandpermissionsgetuserpermissionsandmenuconfigurations)
  * [`clayhr.peopleAndPermissions.getUsers`](#clayhrpeopleandpermissionsgetusers)
  * [`clayhr.peopleAndPermissions.saveCustomFieldValues`](#clayhrpeopleandpermissionssavecustomfieldvalues)
  * [`clayhr.peopleAndPermissions.saveUserAddress`](#clayhrpeopleandpermissionssaveuseraddress)
  * [`clayhr.peopleAndPermissions.saveUserEducation`](#clayhrpeopleandpermissionssaveusereducation)
  * [`clayhr.peopleAndPermissions.saveUserEmployment`](#clayhrpeopleandpermissionssaveuseremployment)
  * [`clayhr.peopleAndPermissions.updateFinancialRecord`](#clayhrpeopleandpermissionsupdatefinancialrecord)
  * [`clayhr.peopleAndPermissions.updateUser`](#clayhrpeopleandpermissionsupdateuser)
  * [`clayhr.peopleAndPermissions.uploadUserProfilePicture`](#clayhrpeopleandpermissionsuploaduserprofilepicture)
  * [`clayhr.performanceReview.createPerformanceReview`](#clayhrperformancereviewcreateperformancereview)
  * [`clayhr.performanceReview.getCompletedReviewsBasedOnUserId`](#clayhrperformancereviewgetcompletedreviewsbasedonuserid)
  * [`clayhr.performanceReview.getPerformanceReviews`](#clayhrperformancereviewgetperformancereviews)
  * [`clayhr.performanceReview.getTemplates`](#clayhrperformancereviewgettemplates)
  * [`clayhr.performanceReview.launchPerformanceReviewsInBulk`](#clayhrperformancereviewlaunchperformancereviewsinbulk)
  * [`clayhr.performanceReviewAssignment.getAssignments`](#clayhrperformancereviewassignmentgetassignments)
  * [`clayhr.positions.createPosition`](#clayhrpositionscreateposition)
  * [`clayhr.positions.getPosition`](#clayhrpositionsgetposition)
  * [`clayhr.positions.getPositionsList`](#clayhrpositionsgetpositionslist)
  * [`clayhr.project.assignUserAllocation`](#clayhrprojectassignuserallocation)
  * [`clayhr.project.createNew`](#clayhrprojectcreatenew)
  * [`clayhr.project.detailsById`](#clayhrprojectdetailsbyid)
  * [`clayhr.project.listAllocations`](#clayhrprojectlistallocations)
  * [`clayhr.project.listProjects`](#clayhrprojectlistprojects)
  * [`clayhr.reports.getContentByAnalyticId`](#clayhrreportsgetcontentbyanalyticid)
  * [`clayhr.reports.getContentForReport`](#clayhrreportsgetcontentforreport)
  * [`clayhr.reports.getReportDetails`](#clayhrreportsgetreportdetails)
  * [`clayhr.shifts.listShiftsUsingGET`](#clayhrshiftslistshiftsusingget)
  * [`clayhr.shifts.saveShift`](#clayhrshiftssaveshift)
  * [`clayhr.skills.createNewSkill`](#clayhrskillscreatenewskill)
  * [`clayhr.skills.getSkills`](#clayhrskillsgetskills)
  * [`clayhr.skills.getUserAssignedSkills`](#clayhrskillsgetuserassignedskills)
  * [`clayhr.survey.createItemResponse`](#clayhrsurveycreateitemresponse)
  * [`clayhr.survey.createResponseByAssignmentId`](#clayhrsurveycreateresponsebyassignmentid)
  * [`clayhr.survey.detailsByFormId`](#clayhrsurveydetailsbyformid)
  * [`clayhr.survey.getAllSurveyResponses`](#clayhrsurveygetallsurveyresponses)
  * [`clayhr.survey.getList`](#clayhrsurveygetlist)
  * [`clayhr.test.getTest`](#clayhrtestgettest)
  * [`clayhr.timecards.clockOut`](#clayhrtimecardsclockout)
  * [`clayhr.timecards.createPastTimecard`](#clayhrtimecardscreatepasttimecard)
  * [`clayhr.timecards.createTimecard`](#clayhrtimecardscreatetimecard)
  * [`clayhr.timecards.getByUserId`](#clayhrtimecardsgetbyuserid)
  * [`clayhr.timecards.getByUserId_0`](#clayhrtimecardsgetbyuserid_0)
  * [`clayhr.timecards.getDetailsByTimecardId`](#clayhrtimecardsgetdetailsbytimecardid)
  * [`clayhr.timecards.getTVCForClockinWithQRCodeUsingCid`](#clayhrtimecardsgettvcforclockinwithqrcodeusingcid)
  * [`clayhr.timecards.getUserById`](#clayhrtimecardsgetuserbyid)
  * [`clayhr.timecards.registerDeviceForClockInWithAssetModel`](#clayhrtimecardsregisterdeviceforclockinwithassetmodel)
  * [`clayhr.timecards.verifyDeviceWithDeviceUUID`](#clayhrtimecardsverifydevicewithdeviceuuid)
  * [`clayhr.timecards.verifyUserWithUserid`](#clayhrtimecardsverifyuserwithuserid)
  * [`clayhr.timesheets.clockIn`](#clayhrtimesheetsclockin)
  * [`clayhr.timesheets.clockOut`](#clayhrtimesheetsclockout)
  * [`clayhr.timesheets.createOrUpdateTimesheet`](#clayhrtimesheetscreateorupdatetimesheet)
  * [`clayhr.timesheets.deleteByTimesheetId`](#clayhrtimesheetsdeletebytimesheetid)
  * [`clayhr.timesheets.getActiveAllocations`](#clayhrtimesheetsgetactiveallocations)
  * [`clayhr.timesheets.getApprovalList`](#clayhrtimesheetsgetapprovallist)
  * [`clayhr.timesheets.getByTimesheetId`](#clayhrtimesheetsgetbytimesheetid)
  * [`clayhr.timesheets.getByUserId`](#clayhrtimesheetsgetbyuserid)
  * [`clayhr.timesheets.getDetailsByTimesheetId`](#clayhrtimesheetsgetdetailsbytimesheetid)
  * [`clayhr.timesheets.getPreferencesByCid`](#clayhrtimesheetsgetpreferencesbycid)
  * [`clayhr.timesheets.getTimecardsByTimesheetId`](#clayhrtimesheetsgettimecardsbytimesheetid)
  * [`clayhr.timesheets.listActivityTypesByCid`](#clayhrtimesheetslistactivitytypesbycid)
  * [`clayhr.timesheets.updateStatusByTimesheetId`](#clayhrtimesheetsupdatestatusbytimesheetid)
  * [`clayhr.trainings.getByUserId`](#clayhrtrainingsgetbyuserid)
  * [`clayhr.trainings.getTrainingContentByTrainingId`](#clayhrtrainingsgettrainingcontentbytrainingid)
  * [`clayhr.trainings.synchronizeWithTalentLMS`](#clayhrtrainingssynchronizewithtalentlms)
  * [`clayhr.trainings.updateUserStatus`](#clayhrtrainingsupdateuserstatus)
  * [`clayhr.userPtoPolicies.getPolicies`](#clayhruserptopoliciesgetpolicies)
  * [`clayhr.userPtoPolicies.listPtoPolicies`](#clayhruserptopolicieslistptopolicies)
  * [`clayhr.userWorkflow.assignWorkflowToUser`](#clayhruserworkflowassignworkflowtouser)
  * [`clayhr.workflows.createNewTask`](#clayhrworkflowscreatenewtask)
  * [`clayhr.workflows.getTaskDetailsByTaskId`](#clayhrworkflowsgettaskdetailsbytaskid)
  * [`clayhr.workflows.getTasksByUserId`](#clayhrworkflowsgettasksbyuserid)
  * [`clayhr.workflows.getUserWorkflows`](#clayhrworkflowsgetuserworkflows)
  * [`clayhr.workflows.getWorkflows`](#clayhrworkflowsgetworkflows)
  * [`clayhr.workflows.listTasksByUserworkflowId`](#clayhrworkflowslisttasksbyuserworkflowid)
  * [`clayhr.workflows.updateStatusTask`](#clayhrworkflowsupdatestatustask)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=ClayHR&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { ClayHr } from "clay-hr-typescript-sdk";

const clayhr = new ClayHr({
  // Defining the base path is optional and defaults to https://acmecompany.bizmerlin.net/rm/api
  // basePath: "https://acmecompany.bizmerlin.net/rm/api",
  sec0: "API_KEY",
  sec1: "API_KEY",
});

const createNewAnnouncementResponse =
  await clayhr.announcement.createNewAnnouncement({
    title: "Travel Policies",
    description: "There are some amendments done in policy leave.",
    url: "https://www.google.com",
    status: "A",
  });

console.log(createNewAnnouncementResponse);
```

## Reference<a id="reference"></a>


### `clayhr.announcement.createNewAnnouncement`<a id="clayhrannouncementcreatenewannouncement"></a>

 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewAnnouncementResponse =
  await clayhr.announcement.createNewAnnouncement({
    title: "Travel Policies",
    description: "There are some amendments done in policy leave.",
    url: "https://www.google.com",
    status: "A",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

Title of the announcement.

##### description: `string`<a id="description-string"></a>

Description of the announcement.

##### url: `string`<a id="url-string"></a>

Any link associated/brief of the announcement.

##### status: `'A' | 'D' | 'I'`<a id="status-a--d--i"></a>

Status of Announcement. Choose between [\"A\", \"D\", \"I\"]. Defaults to \"A\".   A - Active, D - In Draft, I - Archive

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/announcement/create` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.announcement.getAttachmentsById`<a id="clayhrannouncementgetattachmentsbyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAttachmentsByIdResponse = await clayhr.announcement.getAttachmentsById(
  {
    annId: 1,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### annId: `number`<a id="annid-number"></a>

The ID of the announcement.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/attachment/list/{annId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.announcement.getById`<a id="clayhrannouncementgetbyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await clayhr.announcement.getById({
  annId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### annId: `number`<a id="annid-number"></a>

The ID of the announcement.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/announcement/{annId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.announcement.updateAnnouncement`<a id="clayhrannouncementupdateannouncement"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAnnouncementResponse = await clayhr.announcement.updateAnnouncement(
  {
    annId: 1,
    title: "title_example",
    desciption: "",
    url: "",
    status: "A",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### annId: `number`<a id="annid-number"></a>

The ID of the announcement.

##### title: `string`<a id="title-string"></a>

Title of the announcement.

##### desciption: `string`<a id="desciption-string"></a>

Description of the announcement.

##### status: `'A' | 'D' | 'I'`<a id="status-a--d--i"></a>

Status of Announcement. Choose between [\"A\", \"D\", \"I\"]. Defaults to \"A\".   A - Active, D - In Draft, I - Archive

##### url: `string`<a id="url-string"></a>

Link associated with the announcement.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/announcement/edit` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.authentication.getAccessToken`<a id="clayhrauthenticationgetaccesstoken"></a>

Get Access Token for Authentication using x-api-key and userId.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAccessTokenResponse = await clayhr.authentication.getAccessToken();
```

#### 🔄 Return<a id="🔄-return"></a>

[AuthenticationGetAccessTokenResponse](./models/authentication-get-access-token-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/token` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.candidates.extractPdfResume`<a id="clayhrcandidatesextractpdfresume"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const extractPdfResumeResponse = await clayhr.candidates.extractPdfResume({
  file: fs.readFileSync("/path/to/file"),
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### file: `Uint8Array | File | buffer.File`<a id="file-uint8array--file--bufferfile"></a>

The pdf resume of the candidate.

#### 🔄 Return<a id="🔄-return"></a>

[CandidatesExtractPdfResumeResponse](./models/candidates-extract-pdf-resume-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/resume` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.candidates.get`<a id="clayhrcandidatesget"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResponse = await clayhr.candidates.get();
```

#### 🔄 Return<a id="🔄-return"></a>

[CandidatesGetResponse](./models/candidates-get-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.candidates.getBasicDetails`<a id="clayhrcandidatesgetbasicdetails"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBasicDetailsResponse = await clayhr.candidates.getBasicDetails({
  page: 0,
  pageSize: 20,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

Page number.

##### pageSize: `number`<a id="pagesize-number"></a>

Number of candidates per page.

##### search: `string`<a id="search-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CandidatesGetBasicDetailsResponse](./models/candidates-get-basic-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.candidates.getCandidateDetailByRecruitid`<a id="clayhrcandidatesgetcandidatedetailbyrecruitid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCandidateDetailByRecruitidResponse =
  await clayhr.candidates.getCandidateDetailByRecruitid({
    recruitid: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### recruitid: `number`<a id="recruitid-number"></a>

The ID of the recruiter.

#### 🔄 Return<a id="🔄-return"></a>

[CandidatesGetCandidateDetailByRecruitidResponse](./models/candidates-get-candidate-detail-by-recruitid-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/detail/{recruitid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.candidates.submitNewCandidate`<a id="clayhrcandidatessubmitnewcandidate"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const submitNewCandidateResponse = await clayhr.candidates.submitNewCandidate({
  isNewCand: "true",
  source: "API",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the candidate.

##### email: `string`<a id="email-string"></a>

Email ID of the candidate.

##### isNewCand: `'true' | 'false'`<a id="isnewcand-true--false"></a>

Is this new candidate?

##### phone: `number`<a id="phone-number"></a>

Phone number of the candidate.

##### source: `string`<a id="source-string"></a>

The source from which the candidate is being created.

#### 🔄 Return<a id="🔄-return"></a>

[CandidatesSubmitNewCandidateResponse](./models/candidates-submit-new-candidate-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.customFields.getById`<a id="clayhrcustomfieldsgetbyid"></a>

Retrieve Custom Field by ID

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await clayhr.customFields.getById({
  customFieldId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customFieldId: `number`<a id="customfieldid-number"></a>

The ID of the custom field.

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldsGetByIdResponse](./models/custom-fields-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/customfield` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.customFields.getCustomFields`<a id="clayhrcustomfieldsgetcustomfields"></a>

Retrieve Custom Fields

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomFieldsResponse = await clayhr.customFields.getCustomFields({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### objectType: `string`<a id="objecttype-string"></a>

The object type of custom field.

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldsGetCustomFieldsResponse](./models/custom-fields-get-custom-fields-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/customfields` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.customFields.getCustomLists`<a id="clayhrcustomfieldsgetcustomlists"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomListsResponse = await clayhr.customFields.getCustomLists();
```

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldsGetCustomListsResponseInner](./models/custom-fields-get-custom-lists-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/customlist` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.customFields.getValue`<a id="clayhrcustomfieldsgetvalue"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getValueResponse = await clayhr.customFields.getValue({
  customFieldId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customFieldId: `number`<a id="customfieldid-number"></a>

customFieldId

##### customFieldCode: `string`<a id="customfieldcode-string"></a>

customFieldCode

##### userEmail: `string`<a id="useremail-string"></a>

userEmail

##### empId: `string`<a id="empid-string"></a>

empId

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldsGetValueResponse](./models/custom-fields-get-value-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/customfieldvalues` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.customFields.updateValue`<a id="clayhrcustomfieldsupdatevalue"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateValueResponse = await clayhr.customFields.updateValue({
  customFieldId: 1,
  value: "value_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customFieldId: `number`<a id="customfieldid-number"></a>

##### value: `string`<a id="value-string"></a>

##### customFieldCode: `string`<a id="customfieldcode-string"></a>

##### userEmail: `string`<a id="useremail-string"></a>

##### empId: `string`<a id="empid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldsUpdateValueResponse](./models/custom-fields-update-value-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/customfieldvalues` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.dependents.deleteByContactId`<a id="clayhrdependentsdeletebycontactid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByContactIdResponse = await clayhr.dependents.deleteByContactId({
  contactId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contactId: `number`<a id="contactid-number"></a>

Contact ID of Dependent

#### 🔄 Return<a id="🔄-return"></a>

[DependentsDeleteByContactIdResponse](./models/dependents-delete-by-contact-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/delete` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.documentLibrary.getAttachments`<a id="clayhrdocumentlibrarygetattachments"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAttachmentsResponse = await clayhr.documentLibrary.getAttachments();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/documentLibrary` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.documentLibrary.getDocumentAsByteArray`<a id="clayhrdocumentlibrarygetdocumentasbytearray"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDocumentAsByteArrayResponse =
  await clayhr.documentLibrary.getDocumentAsByteArray({
    fileName: "fileName_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileName: `string`<a id="filename-string"></a>

File ID from the server

#### 🔄 Return<a id="🔄-return"></a>

[DocumentLibraryGetDocumentAsByteArrayResponse](./models/document-library-get-document-as-byte-array-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/attachment/download` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.expenseReports.createNew`<a id="clayhrexpensereportscreatenew"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewResponse = await clayhr.expenseReports.createNew({
  name: "name_example",
  amount: 3.14,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the expense report.

##### amount: `number`<a id="amount-number"></a>

Amount to be added in expense report.

##### description: `string`<a id="description-string"></a>

Description of the expense report.

#### 🔄 Return<a id="🔄-return"></a>

[ExpenseReportsCreateNewResponse](./models/expense-reports-create-new-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/expensereport` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.expenseReports.createNewExpenseItem`<a id="clayhrexpensereportscreatenewexpenseitem"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewExpenseItemResponse =
  await clayhr.expenseReports.createNewExpenseItem({
    amount: 3.14,
    billable: "Y",
    cid: 1,
    currencyCode: "$(USD)",
    date: "1970-01-01",
    expenseItemId: 1,
    expenseType: "expenseType_example",
    expenseTypeId: 1,
    projectId: 1,
    reimbursible: "Y",
    remarks: "remarks_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### amount: `number`<a id="amount-number"></a>

Amount of the expense item.

##### billable: `'Y' | 'N'`<a id="billable-y--n"></a>

Y for \"Yes\" and N for \"No\".

##### cid: `number`<a id="cid-number"></a>

The unique ID of the customer.

##### currencyCode: `'$(USD)' | '$(CD)' | '₹(INR)'`<a id="currencycode-usd--cd--₹inr"></a>

Code of the currency.

##### date: `string | Date`<a id="date-string--date"></a>

Date of creating expense item.

##### expenseItemId: `number`<a id="expenseitemid-number"></a>

The ID of the expense item.

##### expenseType: `string`<a id="expensetype-string"></a>

The type of expense.

##### expenseTypeId: `number`<a id="expensetypeid-number"></a>

The ID of the expense type.

##### projectId: `number`<a id="projectid-number"></a>

The ID of the project.

##### reimbursible: `'Y' | 'N'`<a id="reimbursible-y--n"></a>

Y for \"Yes\" and N for \"No\".

##### remarks: `string`<a id="remarks-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ExpenseReportsCreateNewExpenseItemResponse](./models/expense-reports-create-new-expense-item-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/expenseitem` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.expenseReports.deleteExpenseReport`<a id="clayhrexpensereportsdeleteexpensereport"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteExpenseReportResponse =
  await clayhr.expenseReports.deleteExpenseReport({
    expenseReportId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### expenseReportId: `number`<a id="expensereportid-number"></a>

The ID of the expense report.

#### 🔄 Return<a id="🔄-return"></a>

[ExpenseReportsDeleteExpenseReportResponse](./models/expense-reports-delete-expense-report-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/expensereport/delete` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.expenseReports.getByUserId`<a id="clayhrexpensereportsgetbyuserid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByUserIdResponse = await clayhr.expenseReports.getByUserId({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### guid: `string`<a id="guid-string"></a>

The unique system generated ID of the user.

##### email: `string`<a id="email-string"></a>

Email of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/expensereports` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.expenseReports.getCurrencies`<a id="clayhrexpensereportsgetcurrencies"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCurrenciesResponse = await clayhr.expenseReports.getCurrencies();
```

#### 🔄 Return<a id="🔄-return"></a>

[ExpenseReportsGetCurrenciesResponse](./models/expense-reports-get-currencies-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/currencylist` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.expenseReports.getExpenseTypes`<a id="clayhrexpensereportsgetexpensetypes"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getExpenseTypesResponse = await clayhr.expenseReports.getExpenseTypes();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/expensetypes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.expenseReports.getReportDetails`<a id="clayhrexpensereportsgetreportdetails"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getReportDetailsResponse = await clayhr.expenseReports.getReportDetails(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### expenseReportId: `number`<a id="expensereportid-number"></a>

The ID of the expense report.

##### guid: `string`<a id="guid-string"></a>

The unique system generated ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/expensereport` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.expenseReports.submitExpenseReport`<a id="clayhrexpensereportssubmitexpensereport"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const submitExpenseReportResponse =
  await clayhr.expenseReports.submitExpenseReport({
    expenseReportId: 1,
    status: "DRFT",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### expenseReportId: `number`<a id="expensereportid-number"></a>

The ID of the expense report.

##### status: `'DRFT' | 'SUB'`<a id="status-drft--sub"></a>

Status of the expense report.

#### 🔄 Return<a id="🔄-return"></a>

[ExpenseReportsSubmitExpenseReportResponse](./models/expense-reports-submit-expense-report-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/expensereport/submit/{expenseReportId}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.feedback.listFeedback`<a id="clayhrfeedbacklistfeedback"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFeedbackResponse = await clayhr.feedback.listFeedback({
  type: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### type: `'all' | 'my' | 'team'`<a id="type-all--my--team"></a>

Type of feedback to retrieve.  Choose between [\"all\", \"my\", \"team\"]. all - All Feedback, my - My Feedback, team - Team\'s feedback

#### 🔄 Return<a id="🔄-return"></a>

[FeedbackListFeedbackResponse](./models/feedback-list-feedback-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rm/api/feedback` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.forms.getAssignedForms`<a id="clayhrformsgetassignedforms"></a>

Retrieve completed forms assigned to me  

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAssignedFormsResponse = await clayhr.forms.getAssignedForms();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/my` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.forms.getDetails`<a id="clayhrformsgetdetails"></a>

Retrieve form details

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await clayhr.forms.getDetails({
  dynamicFormId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dynamicFormId: `number`<a id="dynamicformid-number"></a>

The ID of Form.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/view` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.forms.getDynaForm`<a id="clayhrformsgetdynaform"></a>

Retrieve forms

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDynaFormResponse = await clayhr.forms.getDynaForm();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/getdynaforms` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.forms.getFormResponse`<a id="clayhrformsgetformresponse"></a>

Retrieve form response 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFormResponseResponse = await clayhr.forms.getFormResponse({
  dynamicFormId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dynamicFormId: `number`<a id="dynamicformid-number"></a>

The ID of Form.

##### assignUserId: `number`<a id="assignuserid-number"></a>

The ID of User.

##### assignmentId: `number`<a id="assignmentid-number"></a>

The Assignment ID of the User.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/response/{dynamicFormId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.forms.getFormResponses`<a id="clayhrformsgetformresponses"></a>

Retrieve form responses

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFormResponsesResponse = await clayhr.forms.getFormResponses({
  dynamicFormId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dynamicFormId: `number`<a id="dynamicformid-number"></a>

The ID of Form.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/responselist` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.forms.saveFormResponse`<a id="clayhrformssaveformresponse"></a>

Save form repsonse 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const saveFormResponseResponse = await clayhr.forms.saveFormResponse({
  assignmentId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### assignmentId: `number`<a id="assignmentid-number"></a>

The Assignment ID of the User.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/saveFormResponse` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.forms.submitItemResponse`<a id="clayhrformssubmititemresponse"></a>

Save item response

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const submitItemResponseResponse = await clayhr.forms.submitItemResponse({
  assignmentId: 1,
  itemId: 1,
  responseValue: "responseValue_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### assignmentId: `number`<a id="assignmentid-number"></a>

The Assignment ID of the User.

##### itemId: `number`<a id="itemid-number"></a>

The ID of the form Item.

##### responseValue: `string`<a id="responsevalue-string"></a>

Response Value to save in Form.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/saveItemResponse` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.goals.createNewGoal`<a id="clayhrgoalscreatenewgoal"></a>

Create new goal

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewGoalResponse = await clayhr.goals.createNewGoal({
  reviewUserId: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### additive: `number`<a id="additive-number"></a>

##### begindate: `string | Date`<a id="begindate-string--date"></a>

##### cid: `number`<a id="cid-number"></a>

##### commentCrediteatets: `string`<a id="commentcrediteatets-string"></a>

##### commentDescription: `string`<a id="commentdescription-string"></a>

##### companyGoal: `number`<a id="companygoal-number"></a>

##### completionRatio: `number`<a id="completionratio-number"></a>

##### createUserId: `number`<a id="createuserid-number"></a>

##### createtsDate: `number`<a id="createtsdate-number"></a>

##### createtsDay: `number`<a id="createtsday-number"></a>

##### createtsHours: `number`<a id="createtshours-number"></a>

##### createtsMinutes: `number`<a id="createtsminutes-number"></a>

##### createtsMonth: `number`<a id="createtsmonth-number"></a>

##### createtsNanos: `number`<a id="createtsnanos-number"></a>

##### createtsSeconds: `number`<a id="createtsseconds-number"></a>

##### createtsTime: `number`<a id="createtstime-number"></a>

##### createtsTimezoneOffset: `number`<a id="createtstimezoneoffset-number"></a>

##### createtsYear: `number`<a id="createtsyear-number"></a>

##### crediteatets: `string`<a id="crediteatets-string"></a>

##### currentValue: `number`<a id="currentvalue-number"></a>

##### description: `string`<a id="description-string"></a>

##### disposition: `string`<a id="disposition-string"></a>

##### elapsedTimeRatio: `number`<a id="elapsedtimeratio-number"></a>

##### goalId: `number`<a id="goalid-number"></a>

##### goalValue: `number`<a id="goalvalue-number"></a>

##### goalWeightage: `number`<a id="goalweightage-number"></a>

##### hasGoalApprovalPermission: `boolean`<a id="hasgoalapprovalpermission-boolean"></a>

##### id: `number`<a id="id-number"></a>

##### initialvalue: `number`<a id="initialvalue-number"></a>

##### isForward: `boolean`<a id="isforward-boolean"></a>

##### lastUpdateUserId: `number`<a id="lastupdateuserid-number"></a>

##### objectiveId: `number`<a id="objectiveid-number"></a>

##### parentGoalId: `number`<a id="parentgoalid-number"></a>

##### progressRatio: `number`<a id="progressratio-number"></a>

##### projectid: `number`<a id="projectid-number"></a>

##### reviewUserId: `number`<a id="reviewuserid-number"></a>

reviewUserId

##### state: `string`<a id="state-string"></a>

##### status: `string`<a id="status-string"></a>

##### summary: `string`<a id="summary-string"></a>

##### targetDate: `string | Date`<a id="targetdate-string--date"></a>

##### typecode: `string`<a id="typecode-string"></a>

##### uname: `string`<a id="uname-string"></a>

##### units: `string`<a id="units-string"></a>

##### visibleToDirectReports: `number`<a id="visibletodirectreports-number"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/goal` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.goals.deleteGoal`<a id="clayhrgoalsdeletegoal"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteGoalResponse = await clayhr.goals.deleteGoal({
  goalId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### goalId: `number`<a id="goalid-number"></a>

GoalId to delete a goal

#### 🔄 Return<a id="🔄-return"></a>

[GoalsDeleteGoalResponse](./models/goals-delete-goal-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/deletegoal` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.goals.getAllGoals`<a id="clayhrgoalsgetallgoals"></a>

Retrieve all goals

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllGoalsResponse = await clayhr.goals.getAllGoals();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/goal` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.goals.getGoal`<a id="clayhrgoalsgetgoal"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getGoalResponse = await clayhr.goals.getGoal({
  goalid: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### goalid: `number`<a id="goalid-number"></a>

ID to get a goal.

##### reviewUserId: `number`<a id="reviewuserid-number"></a>

The ID of the user who is reviewee.

#### 🔄 Return<a id="🔄-return"></a>

[GoalsGetGoalResponse](./models/goals-get-goal-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/getgoal` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.goals.getUserGoals`<a id="clayhrgoalsgetusergoals"></a>

Retrieve goals of user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserGoalsResponse = await clayhr.goals.getUserGoals();
```

#### 🔄 Return<a id="🔄-return"></a>

[GoalsGetUserGoalsResponse](./models/goals-get-user-goals-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/goal/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.invoice.getByProjectId`<a id="clayhrinvoicegetbyprojectid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByProjectIdResponse = await clayhr.invoice.getByProjectId({
  projectId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `number`<a id="projectid-number"></a>

The ID of the project

#### 🔄 Return<a id="🔄-return"></a>

[InvoiceGetByProjectIdResponse](./models/invoice-get-by-project-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/invoice` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.jobProfiles.getJobProfiles`<a id="clayhrjobprofilesgetjobprofiles"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getJobProfilesResponse = await clayhr.jobProfiles.getJobProfiles({
  status: "A",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### status: `'OPEN' | 'A' | 'ARCHV'`<a id="status-open--a--archv"></a>

Status of the job profile A- Active, OPEN- Open, ARCHV- Archive

#### 🔄 Return<a id="🔄-return"></a>

[JobProfilesGetJobProfilesResponseInner](./models/job-profiles-get-job-profiles-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/jobprofiles` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.leaves.addPtoBalance`<a id="clayhrleavesaddptobalance"></a>

Add PTO balance.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addPtoBalanceResponse = await clayhr.leaves.addPtoBalance({
  ptobalances: "ptobalances_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ptobalances: `string`<a id="ptobalances-string"></a>

PTO Balance of user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/userpto/balance/add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.leaves.createNewLeave`<a id="clayhrleavescreatenewleave"></a>

Create a new leave.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewLeaveResponse = await clayhr.leaves.createNewLeave({
  date: "1970-01-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### date: `string`<a id="date-string"></a>

Date of the leave.

##### description: `string`<a id="description-string"></a>

Description for the leave.

##### createUserViewModel: [`UserViewModel`](./models/user-view-model.ts)<a id="createuserviewmodel-userviewmodelmodelsuser-view-modelts"></a>

##### endDateMeridiem: `string`<a id="enddatemeridiem-string"></a>

##### meridiem: `string`<a id="meridiem-string"></a>

##### numberOfDays: `number`<a id="numberofdays-number"></a>

Number of days for which leave is requested.

##### ptoPolicyModel: [`PtoPolicyModel`](./models/pto-policy-model.ts)<a id="ptopolicymodel-ptopolicymodelmodelspto-policy-modelts"></a>

##### totalLeaveDays: `number`<a id="totalleavedays-number"></a>

Total days of leave.

##### totalLeaveHours: `number`<a id="totalleavehours-number"></a>

Total hours of leave.

##### userModel: [`UserModel`](./models/user-model.ts)<a id="usermodel-usermodelmodelsuser-modelts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/leaverequest` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.leaves.getLeaveRequestsWithinDateRange`<a id="clayhrleavesgetleaverequestswithindaterange"></a>

Retrieve leave requests within a date range

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLeaveRequestsWithinDateRangeResponse =
  await clayhr.leaves.getLeaveRequestsWithinDateRange({
    endDate: "1970-01-01",
    leaveUserid: 0,
    startDate: "1970-01-01",
    status: "AP",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### endDate: `string | Date`<a id="enddate-string--date"></a>

End date of the leave.

##### startDate: `string | Date`<a id="startdate-string--date"></a>

Start date of the leave.

##### leaveUserid: `number`<a id="leaveuserid-number"></a>

The userId for that leave.

##### status: `'AP' | 'WA' | 'RJ' | 'PAP' | 'RCAL'`<a id="status-ap--wa--rj--pap--rcal"></a>

The status of leave.   AP: Leave approved   WA: Leave is waiting for approval   RJ: Leave has been rejected   PAP: Leave is in a muti layer approval flow and has been partially approved   RCAL:  Leave was approved, taken, computed and then recalled 

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/leaverequests` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.leaves.getLeavesBasedOnRole`<a id="clayhrleavesgetleavesbasedonrole"></a>

Retrieve leaves for approval/rejection by filtering on basis of Role

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLeavesBasedOnRoleResponse = await clayhr.leaves.getLeavesBasedOnRole();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/manage/leaves` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.leaves.getRemainingHoursCredit`<a id="clayhrleavesgetremaininghourscredit"></a>

Retrieve remaining hours credit for leave policy

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRemainingHoursCreditResponse =
  await clayhr.leaves.getRemainingHoursCredit({
    leaveDate: "1970-01-01",
    leaveId: 1,
    leaveUserId: 1,
    ptoPolicyId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### leaveDate: `string | Date`<a id="leavedate-string--date"></a>

The date of the leave.

##### leaveId: `number`<a id="leaveid-number"></a>

The Id of the leave.

##### leaveUserId: `number`<a id="leaveuserid-number"></a>

The userId for that leave.

##### ptoPolicyId: `number`<a id="ptopolicyid-number"></a>

The Id of the ptoPolicy

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/leave/hours/credit` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.leaves.processLeaveById`<a id="clayhrleavesprocessleavebyid"></a>

Process the leave of a user by leave Id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const processLeaveByIdResponse = await clayhr.leaves.processLeaveById({
  leaveId: 1,
  status: "AP",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### leaveId: `number`<a id="leaveid-number"></a>

The Id for the leave.

##### status: `'AP' | 'WA' | 'RJ' | 'PAP' | 'RCAL'`<a id="status-ap--wa--rj--pap--rcal"></a>

The status of leave.   AP: Leave approved   WA: Leave is waiting for approval   RJ: Leave has been rejected   PAP: Leave is in a muti layer approval flow and has been partially approved   RCAL:  Leave was approved, taken, computed and then recalled 

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/process/leave` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.objective.getByUserIdOrSpecificObjectiveById`<a id="clayhrobjectivegetbyuseridorspecificobjectivebyid"></a>

Retrieve objectives by user ID or specific objective by objective ID

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByUserIdOrSpecificObjectiveByIdResponse =
  await clayhr.objective.getByUserIdOrSpecificObjectiveById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### objectiveId: `string`<a id="objectiveid-string"></a>

ID of Objective

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/objective` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.orgUnits.createNewOrgUnit`<a id="clayhrorgunitscreateneworgunit"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewOrgUnitResponse = await clayhr.orgUnits.createNewOrgUnit({
  name: "name_example",
  description: "description_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the org unit.

##### description: `string`<a id="description-string"></a>

Description of the org unit.

##### deptHead: `number`<a id="depthead-number"></a>

The ID of the department head.

##### deptHeadName: `string`<a id="deptheadname-string"></a>

Name of the department head.

##### departmentCode: `string`<a id="departmentcode-string"></a>

The code of the department.

##### departmentId: `number`<a id="departmentid-number"></a>

The ID of the department.

##### departmentLabel: `string`<a id="departmentlabel-string"></a>

Label for the department.

##### noOfEmployees: `number`<a id="noofemployees-number"></a>

Number of employees.

##### parentDepartmentId: `number`<a id="parentdepartmentid-number"></a>

The ID of the parent department.

##### parentDepartmentName: `string`<a id="parentdepartmentname-string"></a>

Name of the parent department.

#### 🔄 Return<a id="🔄-return"></a>

[OrgUnitsCreateNewOrgUnitResponse](./models/org-units-create-new-org-unit-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/orgunits/add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.orgUnits.getOrgUnits`<a id="clayhrorgunitsgetorgunits"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOrgUnitsResponse = await clayhr.orgUnits.getOrgUnits();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/orgunits` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.orgRelation.getAllActive`<a id="clayhrorgrelationgetallactive"></a>

Retrieve all active OrgRelations for entire organization.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllActiveResponse = await clayhr.orgRelation.getAllActive();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/orgrelation/allactive` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.orgRelation.getOrgRelationsByUser`<a id="clayhrorgrelationgetorgrelationsbyuser"></a>

Retrieve all the OrgRelations for the given user including Active, Archive and Future OrgRelations.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOrgRelationsByUserResponse =
  await clayhr.orgRelation.getOrgRelationsByUser({
    email: "email_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email: `string`<a id="email-string"></a>

Email for which org relation will be fetched.

##### employeeUserId: `number`<a id="employeeuserid-number"></a>

User Id for which org relation will be fetched.

##### empId: `string`<a id="empid-string"></a>

Employee Id for which org relation will be fetched.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/orgrelation/orgRelationsByUser` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.orgRelation.saveUser`<a id="clayhrorgrelationsaveuser"></a>

Saves the OrgRelation for the User.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const saveUserResponse = await clayhr.orgRelation.saveUser({
  orgRelationId: 1,
  managerUserId: 1,
  managerEmail: "managerEmail_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### orgRelationId: `number`<a id="orgrelationid-number"></a>

ID of OrgRelation for which data will be saved.

##### managerUserId: `number`<a id="manageruserid-number"></a>

User Id of the manager.

##### managerEmail: `string`<a id="manageremail-string"></a>

Email of manager.

##### userEmail: `string`<a id="useremail-string"></a>

User\'s email.

##### otherUserId: `number`<a id="otheruserid-number"></a>

User Id of the reporter.

##### relationType: `string`<a id="relationtype-string"></a>

Type of relation w.r.t manager.

##### startDate: `string | Date`<a id="startdate-string--date"></a>

Date of start in that org unit.

##### enddate: `string | Date`<a id="enddate-string--date"></a>

Ending date in that org unit.

##### cid: `number`<a id="cid-number"></a>

Company ID.

##### status: `string`<a id="status-string"></a>

User is active or not active.

#### 🔄 Return<a id="🔄-return"></a>

[OrgRelationSaveUserResponse](./models/org-relation-save-user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/orgrelation/save` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.payStubs.getDetails`<a id="clayhrpaystubsgetdetails"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await clayhr.payStubs.getDetails();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/paystub` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.peopleAndPermissions.addReportsTo`<a id="clayhrpeopleandpermissionsaddreportsto"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addReportsToResponse = await clayhr.peopleAndPermissions.addReportsTo({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### Add Objects: [`PeopleAndPermissionsAddReportsToRequestAddObjectsInner`](./models/people-and-permissions-add-reports-to-request-add-objects-inner.ts)[]<a id="add-objects-peopleandpermissionsaddreportstorequestaddobjectsinnermodelspeople-and-permissions-add-reports-to-request-add-objects-innerts"></a>

##### empId: `string`<a id="empid-string"></a>

The unique identity of the employee. 

##### email: `string`<a id="email-string"></a>

Email address of the user.

#### 🔄 Return<a id="🔄-return"></a>

[PeopleAndPermissionsAddReportsToResponse](./models/people-and-permissions-add-reports-to-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/user/orgrelation/add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.peopleAndPermissions.createOrUpdateUserDetails`<a id="clayhrpeopleandpermissionscreateorupdateuserdetails"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOrUpdateUserDetailsResponse =
  await clayhr.peopleAndPermissions.createOrUpdateUserDetails({
    status: "A",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### firstName: `string`<a id="firstname-string"></a>

First name of user.

##### email: `string`<a id="email-string"></a>

Mail ID of user.

##### lastName: `string`<a id="lastname-string"></a>

Last name of user.

##### empId: `string`<a id="empid-string"></a>

Employee ID of the user.

##### gender: `string`<a id="gender-string"></a>

Gender of the user.

##### guid: `string`<a id="guid-string"></a>

The unique system generated ID of the user.

##### status: `string`<a id="status-string"></a>

Status of the user. A - Active, I - Inactive, F - Future Joiner

##### displayFullName: `string`<a id="displayfullname-string"></a>

Display name of the user.

##### middleName: `string`<a id="middlename-string"></a>

Middle name of user.

##### secondLastName: `string`<a id="secondlastname-string"></a>

Second Last name of user.

##### shortName: `string`<a id="shortname-string"></a>

Short name of user.

##### namePronunciation: `string`<a id="namepronunciation-string"></a>

Name Pronunciation

##### familySuffix: `string`<a id="familysuffix-string"></a>

Family Suffix

##### workerType: `string`<a id="workertype-string"></a>

Worker type of the user.

##### userDateOfBirth: `string`<a id="userdateofbirth-string"></a>

Birth date of user.

##### phone: `string`<a id="phone-string"></a>

Phone number of the user.

##### cellPhone: `string`<a id="cellphone-string"></a>

Cell phone of the user.

##### position: `number`<a id="position-number"></a>

Profile ID of the user.

##### departmentID: `number`<a id="departmentid-number"></a>

Org Unit ID of the user.

##### locationId: `number`<a id="locationid-number"></a>

Location ID of the user.

##### locationName: `string`<a id="locationname-string"></a>

Location of user.

##### userStartDate: `string`<a id="userstartdate-string"></a>

Start Date of user.

##### reportsToEmail: `string`[]<a id="reportstoemail-string"></a>

Managers detail of user.

##### addressList: [`PeopleAndPermissionsCreateOrUpdateUserDetailsRequestAddressListInner`](./models/people-and-permissions-create-or-update-user-details-request-address-list-inner.ts)[]<a id="addresslist-peopleandpermissionscreateorupdateuserdetailsrequestaddresslistinnermodelspeople-and-permissions-create-or-update-user-details-request-address-list-innerts"></a>

Address detail of user.

##### educationList: [`PeopleAndPermissionsCreateOrUpdateUserDetailsRequestEducationListInner`](./models/people-and-permissions-create-or-update-user-details-request-education-list-inner.ts)[]<a id="educationlist-peopleandpermissionscreateorupdateuserdetailsrequesteducationlistinnermodelspeople-and-permissions-create-or-update-user-details-request-education-list-innerts"></a>

Education detail of user.

##### contactList: [`PeopleAndPermissionsCreateOrUpdateUserDetailsRequestContactListInner`](./models/people-and-permissions-create-or-update-user-details-request-contact-list-inner.ts)[]<a id="contactlist-peopleandpermissionscreateorupdateuserdetailsrequestcontactlistinnermodelspeople-and-permissions-create-or-update-user-details-request-contact-list-innerts"></a>

Contact detail of user

##### financialList: [`PeopleAndPermissionsCreateOrUpdateUserDetailsRequestFinancialListInner`](./models/people-and-permissions-create-or-update-user-details-request-financial-list-inner.ts)[]<a id="financiallist-peopleandpermissionscreateorupdateuserdetailsrequestfinanciallistinnermodelspeople-and-permissions-create-or-update-user-details-request-financial-list-innerts"></a>

Financial detail of user.

##### customFieldValues: `string`<a id="customfieldvalues-string"></a>

key - cfcode , value - cfvalue

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/user/completeUserDetails` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.peopleAndPermissions.createUser`<a id="clayhrpeopleandpermissionscreateuser"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createUserResponse = await clayhr.peopleAndPermissions.createUser({
  firstName: "firstName_example",
  email: "email_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### firstName: `string`<a id="firstname-string"></a>

First name of user.

##### email: `string`<a id="email-string"></a>

Mail ID of user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/user/add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.peopleAndPermissions.createUserCompensation`<a id="clayhrpeopleandpermissionscreateusercompensation"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createUserCompensationResponse =
  await clayhr.peopleAndPermissions.createUserCompensation({
    value: "value_example",
    compensationType: "sal",
    currencyCode: "currencyCode_example",
    period: "HRLY",
    effectivedate: "effectivedate_example",
    status: "ACTV",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### value: `string`<a id="value-string"></a>

Value of compensation

##### compensationType: `'sal' | 'pay' | 'bonus' | 'INCTV' | 'SVRC' | 'other'`<a id="compensationtype-sal--pay--bonus--inctv--svrc--other"></a>

Type of compensation.   sal - Salary, pay - , INCTV - Incentive, SVCR - Severance

##### currencyCode: `string`<a id="currencycode-string"></a>

##### period: `'HRLY' | 'DLY' | 'WKLY' | 'BWKLY' | 'MTHLY' | 'BMTH' | 'QTRLY' | 'BYRLY' | 'YRLY' | 'ONEF'`<a id="period-hrly--dly--wkly--bwkly--mthly--bmth--qtrly--byrly--yrly--onef"></a>

Time period for compensation.   HRLY - Hourly, DLY - Daily, WKLY - Weekly,  BWKLY - Bi-Weekly, MTHLY - Monthly, BMTH - Bi-Monthly, QTRLY - Quarterly, BYRLY - Bi-Yearly, YRLY - Yearly,   ONEF - OneOff

##### effectivedate: `string`<a id="effectivedate-string"></a>

##### status: `'ACTV' | 'ARCHV' | 'PVNL'`<a id="status-actv--archv--pvnl"></a>

Status of compensation.   ACTV - Active, ARCHV - Archive, PVNL - Provisional

##### enddate: `string`<a id="enddate-string"></a>

##### notes: `string`<a id="notes-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/user/compensation/add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.peopleAndPermissions.deleteUserAddress`<a id="clayhrpeopleandpermissionsdeleteuseraddress"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteUserAddressResponse =
  await clayhr.peopleAndPermissions.deleteUserAddress({
    addressId: "addressId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### addressId: `string`<a id="addressid-string"></a>

The unique ID of the address.

#### 🔄 Return<a id="🔄-return"></a>

[PeopleAndPermissionsDeleteUserAddressResponse](./models/people-and-permissions-delete-user-address-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/user/address/delete` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.peopleAndPermissions.deleteUserEducation`<a id="clayhrpeopleandpermissionsdeleteusereducation"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteUserEducationResponse =
  await clayhr.peopleAndPermissions.deleteUserEducation({
    educationId: "educationId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### educationId: `string`<a id="educationid-string"></a>

Education ID the user

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/user/education/delete` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.peopleAndPermissions.deleteUserEmployment`<a id="clayhrpeopleandpermissionsdeleteuseremployment"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteUserEmploymentResponse =
  await clayhr.peopleAndPermissions.deleteUserEmployment({
    empid: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### empid: `number`<a id="empid-number"></a>

The unique identity of the employee. 

#### 🔄 Return<a id="🔄-return"></a>

[PeopleAndPermissionsDeleteUserEmploymentResponse](./models/people-and-permissions-delete-user-employment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/user/employment/delete` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.peopleAndPermissions.getAllUsersDetails`<a id="clayhrpeopleandpermissionsgetallusersdetails"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllUsersDetailsResponse =
  await clayhr.peopleAndPermissions.getAllUsersDetails({
    page: 1,
    pageSize: 20,
    status: "A",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the user.

##### page: `number`<a id="page-number"></a>

Page number.

##### pageSize: `number`<a id="pagesize-number"></a>

Number of users per page.

##### search: `string`<a id="search-string"></a>

##### startDateBefore: `string | Date`<a id="startdatebefore-string--date"></a>

The date before the assigned Start Date.

##### startDateAfter: `string | Date`<a id="startdateafter-string--date"></a>

The date after the assigned Start Date.

##### endDateBefore: `string | Date`<a id="enddatebefore-string--date"></a>

The date before the assigned End Date.

##### endDateAfter: `string | Date`<a id="enddateafter-string--date"></a>

The date after the assigned End Date.

##### status: `'A' | 'I' | 'F'`<a id="status-a--i--f"></a>

Status of the user.    A- Active User   I- Inactive User   F- Future Joiner 

#### 🔄 Return<a id="🔄-return"></a>

[PeopleAndPermissionsGetAllUsersDetailsResponseInner](./models/people-and-permissions-get-all-users-details-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.peopleAndPermissions.getBasicUserDetails`<a id="clayhrpeopleandpermissionsgetbasicuserdetails"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBasicUserDetailsResponse =
  await clayhr.peopleAndPermissions.getBasicUserDetails({
    page: 1,
    pageSize: 20,
    status: "A",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the user.

##### page: `number`<a id="page-number"></a>

Page number.

##### pageSize: `number`<a id="pagesize-number"></a>

Number of users per page.

##### search: `string`<a id="search-string"></a>

##### startDateBefore: `string | Date`<a id="startdatebefore-string--date"></a>

The date before the assigned Start Date.

##### startDateAfter: `string | Date`<a id="startdateafter-string--date"></a>

The date after the assigned Start Date.

##### endDateBefore: `string | Date`<a id="enddatebefore-string--date"></a>

The date before the assigned End Date.

##### endDateAfter: `string | Date`<a id="enddateafter-string--date"></a>

The date after the assigned End Date.

##### status: `'A' | 'I' | 'F'`<a id="status-a--i--f"></a>

Status of the user.    A- Active User   I- Inactive User   F- Future Joiner 

#### 🔄 Return<a id="🔄-return"></a>

[PeopleAndPermissionsGetBasicUserDetailsResponseInner](./models/people-and-permissions-get-basic-user-details-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/users/basic` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.peopleAndPermissions.getFinancialRecord`<a id="clayhrpeopleandpermissionsgetfinancialrecord"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFinancialRecordResponse =
  await clayhr.peopleAndPermissions.getFinancialRecord({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email: `string`<a id="email-string"></a>

Email address of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/user/compensation` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.peopleAndPermissions.getFinancialStatus`<a id="clayhrpeopleandpermissionsgetfinancialstatus"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFinancialStatusResponse =
  await clayhr.peopleAndPermissions.getFinancialStatus();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/user/update/status` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.peopleAndPermissions.getUserBasicInformation`<a id="clayhrpeopleandpermissionsgetuserbasicinformation"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserBasicInformationResponse =
  await clayhr.peopleAndPermissions.getUserBasicInformation({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email: `string`<a id="email-string"></a>

Email of user

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/user/basic` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.peopleAndPermissions.getUserDetails`<a id="clayhrpeopleandpermissionsgetuserdetails"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserDetailsResponse =
  await clayhr.peopleAndPermissions.getUserDetails();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/user` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.peopleAndPermissions.getUserList`<a id="clayhrpeopleandpermissionsgetuserlist"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserListResponse = await clayhr.peopleAndPermissions.getUserList({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/user/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.peopleAndPermissions.getUserPermissionsAndMenuConfigurations`<a id="clayhrpeopleandpermissionsgetuserpermissionsandmenuconfigurations"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserPermissionsAndMenuConfigurationsResponse =
  await clayhr.peopleAndPermissions.getUserPermissionsAndMenuConfigurations();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/user/permissions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.peopleAndPermissions.getUsers`<a id="clayhrpeopleandpermissionsgetusers"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUsersResponse = await clayhr.peopleAndPermissions.getUsers({
  page: 1,
  pageSize: 20,
  sortOrder: "asc",
  status: "A",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the user.

##### page: `number`<a id="page-number"></a>

Page number.

##### pageSize: `number`<a id="pagesize-number"></a>

Number of users per page.

##### sortBy: `string`<a id="sortby-string"></a>

##### sortOrder: `'asc' | 'desc'`<a id="sortorder-asc--desc"></a>

Order to sort the users.   asc- Ascending Order   desc- Descending Order 

##### status: `'A' | 'I' | 'F'`<a id="status-a--i--f"></a>

Status of the user.    A- Active User   I- Inactive User   F- Future Joiner 

#### 🔄 Return<a id="🔄-return"></a>

[PeopleAndPermissionsGetUsersResponse](./models/people-and-permissions-get-users-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/resource` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.peopleAndPermissions.saveCustomFieldValues`<a id="clayhrpeopleandpermissionssavecustomfieldvalues"></a>

Save Custom Field values

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const saveCustomFieldValuesResponse =
  await clayhr.peopleAndPermissions.saveCustomFieldValues([null]);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### empId: `string`<a id="empid-string"></a>

The unique identity of the employee.

##### guid: `string`<a id="guid-string"></a>

The unique system generated ID of the user.

##### email: `string`<a id="email-string"></a>

Email address of the user.

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

`any`
`any`[]

Custom fields

#### 🔄 Return<a id="🔄-return"></a>

[PeopleAndPermissionsSaveCustomFieldValuesResponse](./models/people-and-permissions-save-custom-field-values-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/user/saveCustomFieldValues` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.peopleAndPermissions.saveUserAddress`<a id="clayhrpeopleandpermissionssaveuseraddress"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const saveUserAddressResponse =
  await clayhr.peopleAndPermissions.saveUserAddress({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### RAW_BODY: [`PeopleAndPermissionsSaveUserAddressRequestRAWBODYInner`](./models/people-and-permissions-save-user-address-request-rawbodyinner.ts)[]<a id="raw_body-peopleandpermissionssaveuseraddressrequestrawbodyinnermodelspeople-and-permissions-save-user-address-request-rawbodyinnerts"></a>

##### empId: `string`<a id="empid-string"></a>

The unique identity of the employee. 

##### email: `string`<a id="email-string"></a>

Email address of the user.

#### 🔄 Return<a id="🔄-return"></a>

[PeopleAndPermissionsSaveUserAddressResponse](./models/people-and-permissions-save-user-address-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/address/save` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.peopleAndPermissions.saveUserEducation`<a id="clayhrpeopleandpermissionssaveusereducation"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const saveUserEducationResponse =
  await clayhr.peopleAndPermissions.saveUserEducation({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### RAW_BODY: [`PeopleAndPermissionsSaveUserEducationRequestRAWBODYInner`](./models/people-and-permissions-save-user-education-request-rawbodyinner.ts)[]<a id="raw_body-peopleandpermissionssaveusereducationrequestrawbodyinnermodelspeople-and-permissions-save-user-education-request-rawbodyinnerts"></a>

##### empId: `string`<a id="empid-string"></a>

The unique identity of the employee. 

##### email: `string`<a id="email-string"></a>

Email address of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/education/save` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.peopleAndPermissions.saveUserEmployment`<a id="clayhrpeopleandpermissionssaveuseremployment"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const saveUserEmploymentResponse =
  await clayhr.peopleAndPermissions.saveUserEmployment({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### RAW_BODY: [`PeopleAndPermissionsSaveUserEmploymentRequestRAWBODYInner`](./models/people-and-permissions-save-user-employment-request-rawbodyinner.ts)[]<a id="raw_body-peopleandpermissionssaveuseremploymentrequestrawbodyinnermodelspeople-and-permissions-save-user-employment-request-rawbodyinnerts"></a>

##### empId: `string`<a id="empid-string"></a>

The unique identity of the employee. 

##### email: `string`<a id="email-string"></a>

Email address of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/employment/save` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.peopleAndPermissions.updateFinancialRecord`<a id="clayhrpeopleandpermissionsupdatefinancialrecord"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateFinancialRecordResponse =
  await clayhr.peopleAndPermissions.updateFinancialRecord({
    guid: "guid_example",
    value: "value_example",
    compensationType: "sal",
    currencyCode: "currencyCode_example",
    period: "HRLY",
    effectivedate: "yyyy-mm-dd",
    enddate: "yyyy-mm-dd",
    status: "ACTV",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### guid: `string`<a id="guid-string"></a>

##### value: `string`<a id="value-string"></a>

##### compensationType: `'sal' | 'pay' | 'bonus' | 'INCTV' | 'SVRC' | 'other'`<a id="compensationtype-sal--pay--bonus--inctv--svrc--other"></a>

Type of compensation.   sal - Salary, pay - , INCTV - Incentive, SVCR - Severance

##### currencyCode: `string`<a id="currencycode-string"></a>

##### period: `'HRLY' | 'DLY' | 'WKLY' | 'BWKLY' | 'MTHLY' | 'BMTH' | 'QTRLY' | 'BYRLY' | 'YRLY' | 'ONEF'`<a id="period-hrly--dly--wkly--bwkly--mthly--bmth--qtrly--byrly--yrly--onef"></a>

Time period for compensation.   HRLY - Hourly, DLY - Daily, WKLY - Weekly,  BWKLY - Bi-Weekly, MTHLY - Monthly, BMTH - Bi-Monthly, QTRLY - Quarterly, BYRLY - Bi-Yearly, YRLY - Yearly,   ONEF - OneOff

##### status: `'ACTV' | 'ARCHV' | 'PVNL'`<a id="status-actv--archv--pvnl"></a>

Status of compensation.   ACTV - Active, ARCHV - Archive, PVNL - Provisional

##### effectivedate: `string | Date`<a id="effectivedate-string--date"></a>

##### enddate: `string | Date`<a id="enddate-string--date"></a>

##### notes: `string`<a id="notes-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/user/compensation/update` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.peopleAndPermissions.updateUser`<a id="clayhrpeopleandpermissionsupdateuser"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateUserResponse = await clayhr.peopleAndPermissions.updateUser({
  status: "A",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### guid: `string`<a id="guid-string"></a>

The unique system generated ID of the user.

##### email: `string`<a id="email-string"></a>

Email address of the user.

##### empId: `string`<a id="empid-string"></a>

Employee ID of the user.   To update the employee ID, you need admin access.

##### firstName: `string`<a id="firstname-string"></a>

First name of the user.

##### middleName: `string`<a id="middlename-string"></a>

Last name of the user.

##### lastName: `string`<a id="lastname-string"></a>

Last name of the user.

##### secondLastName: `string`<a id="secondlastname-string"></a>

Second last name of the user.

##### displayFullName: `string`<a id="displayfullname-string"></a>

Display name of the user.

##### cellPhone: `string`<a id="cellphone-string"></a>

Cell phone of the user.

##### phone: `string`<a id="phone-string"></a>

Phone number of the user.

##### familySuffix: `string`<a id="familysuffix-string"></a>

Family suffix of the user.

##### userDateOfBirth: `string | Date`<a id="userdateofbirth-string--date"></a>

Date of birth of the user.

##### jobGrade: `string`<a id="jobgrade-string"></a>

Job grade of the user.

##### userStartDate: `string | Date`<a id="userstartdate-string--date"></a>

Starting date of the user.

##### userEndDate: `string | Date`<a id="userenddate-string--date"></a>

End date of the user.

##### gender: `string`<a id="gender-string"></a>

Gender of the user.

##### position: `string`<a id="position-string"></a>

Position of the user.

##### profileId: `string`<a id="profileid-string"></a>

Profile ID of the user.

##### shortName: `string`<a id="shortname-string"></a>

Short name of the user.

##### status: `'A' | 'I' | 'F'`<a id="status-a--i--f"></a>

Status of the user.

##### locationName: `string`<a id="locationname-string"></a>

Location of the user.

##### locationId: `string`<a id="locationid-string"></a>

Location ID of user location.

##### notes: `string`<a id="notes-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/user/update` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.peopleAndPermissions.uploadUserProfilePicture`<a id="clayhrpeopleandpermissionsuploaduserprofilepicture"></a>

 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadUserProfilePictureResponse =
  await clayhr.peopleAndPermissions.uploadUserProfilePicture({
    file: fs.readFileSync("/path/to/file"),
    userid: "userid_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### file: `Uint8Array | File | buffer.File`<a id="file-uint8array--file--bufferfile"></a>

Upload the profile picture here.

##### userid: `string`<a id="userid-string"></a>

The ID of the user whose profile picture has to be updated.

#### 🔄 Return<a id="🔄-return"></a>

[PeopleAndPermissionsUploadUserProfilePictureResponse](./models/people-and-permissions-upload-user-profile-picture-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/user/uploadpicture` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.performanceReview.createPerformanceReview`<a id="clayhrperformancereviewcreateperformancereview"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPerformanceReviewResponse =
  await clayhr.performanceReview.createPerformanceReview({
    templateId: 1,
    startDate: "2022-10-02",
    endDate: "2022-10-02",
    appraisalType: "Annual",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### templateId: `number`<a id="templateid-number"></a>

The ID of the performance review template.

##### startDate: `string | Date`<a id="startdate-string--date"></a>

Start Date of the performance review.

##### endDate: `string | Date`<a id="enddate-string--date"></a>

End Date of the performance review.

##### appraisalType: `'Annual' | 'Mid-Year' | 'Quarterly' | 'Probation' | 'Other'`<a id="appraisaltype-annual--mid-year--quarterly--probation--other"></a>

Review Period

#### 🔄 Return<a id="🔄-return"></a>

[PerformanceReviewCreatePerformanceReviewResponse](./models/performance-review-create-performance-review-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/appraisal/add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.performanceReview.getCompletedReviewsBasedOnUserId`<a id="clayhrperformancereviewgetcompletedreviewsbasedonuserid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCompletedReviewsBasedOnUserIdResponse =
  await clayhr.performanceReview.getCompletedReviewsBasedOnUserId({
    targetUserId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### targetUserId: `number`<a id="targetuserid-number"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/appraisal/getCompletedReviews` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.performanceReview.getPerformanceReviews`<a id="clayhrperformancereviewgetperformancereviews"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPerformanceReviewsResponse =
  await clayhr.performanceReview.getPerformanceReviews();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/appraisal/user` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.performanceReview.getTemplates`<a id="clayhrperformancereviewgettemplates"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTemplatesResponse = await clayhr.performanceReview.getTemplates();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/appraisal/template/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.performanceReview.launchPerformanceReviewsInBulk`<a id="clayhrperformancereviewlaunchperformancereviewsinbulk"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const launchPerformanceReviewsInBulkResponse =
  await clayhr.performanceReview.launchPerformanceReviewsInBulk({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### templateId: `string`<a id="templateid-string"></a>

##### reviewType: `string`<a id="reviewtype-string"></a>

##### startDate: `string`<a id="startdate-string"></a>

##### endDate: `string`<a id="enddate-string"></a>

##### importGoals: `string`<a id="importgoals-string"></a>

##### importJobProfileSkills: `string`<a id="importjobprofileskills-string"></a>

##### importSkills: `string`<a id="importskills-string"></a>

##### userIdList: `string`<a id="useridlist-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/appraisal/bulkLaunch` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.performanceReviewAssignment.getAssignments`<a id="clayhrperformancereviewassignmentgetassignments"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAssignmentsResponse =
  await clayhr.performanceReviewAssignment.getAssignments();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/appraisal/assignment` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.positions.createPosition`<a id="clayhrpositionscreateposition"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPositionResponse = await clayhr.positions.createPosition({
  name: "name_example",
  count: 1,
  status: "OPEN",
  accessLevel: "pvt",
  dateOpen: "dateOpen_example",
  dateClose: "dateClose_example",
  positionUID: "positionUID_example",
  funnelId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of Position

##### count: `number`<a id="count-number"></a>

Number of openings

##### status: `'OPEN' | 'HOLD'`<a id="status-open--hold"></a>

Status of Position

##### accessLevel: `'pvt' | 'ijp' | 'pub'`<a id="accesslevel-pvt--ijp--pub"></a>

Access level of Position   \'pvt\' - Private, \'ijp\' - Publish Internally, \'pub\' - Public

##### dateOpen: `string`<a id="dateopen-string"></a>

Date of Opening

##### dateClose: `string`<a id="dateclose-string"></a>

Date of Closing

##### positionUID: `string`<a id="positionuid-string"></a>

Unique Identity of Position

##### funnelId: `number`<a id="funnelid-number"></a>

Candidate Funnel ID of Position

##### description: `string`<a id="description-string"></a>

Description of Position

##### requirements: `string`<a id="requirements-string"></a>

Requirements of Position

##### responsibilities: `string`<a id="responsibilities-string"></a>

Responsibilities of Position

##### projectid: `number`<a id="projectid-number"></a>

Project ID of Position

##### approvalFlowId: `number`<a id="approvalflowid-number"></a>

Position Approval Flow ID of Position

##### locationid: `number`<a id="locationid-number"></a>

Location ID of Position

##### departmentId: `string`<a id="departmentid-string"></a>

Department ID of Position

##### profileid: `number`<a id="profileid-number"></a>

Profile ID of Position

##### recruiterId: `number`<a id="recruiterid-number"></a>

ID of Recruiter

#### 🔄 Return<a id="🔄-return"></a>

[PositionsCreatePositionResponse](./models/positions-create-position-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/position/save` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.positions.getPosition`<a id="clayhrpositionsgetposition"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPositionResponse = await clayhr.positions.getPosition({
  positionid: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### positionid: `number`<a id="positionid-number"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/position/view` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.positions.getPositionsList`<a id="clayhrpositionsgetpositionslist"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPositionsListResponse = await clayhr.positions.getPositionsList({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### search: `string`<a id="search-string"></a>



##### page: `number`<a id="page-number"></a>

Page number

##### pageSize: `number`<a id="pagesize-number"></a>

Number of users per page

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/position/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.project.assignUserAllocation`<a id="clayhrprojectassignuserallocation"></a>

Assigns the project to the user based on the project ID and user ID and returns the userProjectId, which is the ID of the assignment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const assignUserAllocationResponse = await clayhr.project.assignUserAllocation({
  projectId: 1,
  userId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `number`<a id="projectid-number"></a>

The ID of the project.

##### userId: `number`<a id="userid-number"></a>

The ID of the user to whom the project should be assigned.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/projects/allocation` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.project.createNew`<a id="clayhrprojectcreatenew"></a>

Create a new project.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewResponse = await clayhr.project.createNew({
  projectName: "Machine Learning",
  projectDesc: "The project relates to the machine learning services.",
  shortCode: "ML_007",
  startDate: "1970-01-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectName: `string`<a id="projectname-string"></a>

Name of the project.

##### projectDesc: `string`<a id="projectdesc-string"></a>

Description of the project.

##### shortCode: `string`<a id="shortcode-string"></a>

A unique short code to identify the project.

##### startDate: `string`<a id="startdate-string"></a>

Start date of the project.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/projects` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.project.detailsById`<a id="clayhrprojectdetailsbyid"></a>

Retrieve the details of the Project by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const detailsByIdResponse = await clayhr.project.detailsById({
  projectId: "projectId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `string`<a id="projectid-string"></a>

The ID of the project.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/projects/{projectId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.project.listAllocations`<a id="clayhrprojectlistallocations"></a>

Returns all user allocations for the project.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllocationsResponse = await clayhr.project.listAllocations({
  projectId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `number`<a id="projectid-number"></a>

The ID of the project.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/projects/allocation/{projectId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.project.listProjects`<a id="clayhrprojectlistprojects"></a>

Returns a list of projects.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listProjectsResponse = await clayhr.project.listProjects();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/projects` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.reports.getContentByAnalyticId`<a id="clayhrreportsgetcontentbyanalyticid"></a>

Get content for report by analytic Id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getContentByAnalyticIdResponse =
  await clayhr.reports.getContentByAnalyticId({
    analyticId: "analyticId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### analyticId: `string`<a id="analyticid-string"></a>

analyticId

##### authorization: `string`<a id="authorization-string"></a>

Authorization

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/report/content` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.reports.getContentForReport`<a id="clayhrreportsgetcontentforreport"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getContentForReportResponse = await clayhr.reports.getContentForReport({
  analyticId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### analyticId: `number`<a id="analyticid-number"></a>

The ID of the report.

#### 🔄 Return<a id="🔄-return"></a>

[ReportsGetContentForReportResponse](./models/reports-get-content-for-report-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/report/content` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.reports.getReportDetails`<a id="clayhrreportsgetreportdetails"></a>

Get report

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getReportDetailsResponse = await clayhr.reports.getReportDetails({
  analyticId: "analyticId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### analyticId: `string`<a id="analyticid-string"></a>

analyticId

##### authorization: `string`<a id="authorization-string"></a>

Authorization

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/report` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.shifts.listShiftsUsingGET`<a id="clayhrshiftslistshiftsusingget"></a>

Get Shifts

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listShiftsUsingGETResponse = await clayhr.shifts.listShiftsUsingGET({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `number`<a id="projectid-number"></a>

projectId

##### startDate: `string`<a id="startdate-string"></a>

startDate

##### endDate: `string`<a id="enddate-string"></a>

endDate

##### status: `string`<a id="status-string"></a>

status

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/shifts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.shifts.saveShift`<a id="clayhrshiftssaveshift"></a>

Save Shift

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const saveShiftResponse = await clayhr.shifts.saveShift("example_string");
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/shifts/save` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.skills.createNewSkill`<a id="clayhrskillscreatenewskill"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewSkillResponse = await clayhr.skills.createNewSkill({
  description: "description_example",
  skillCode: "skillCode_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### description: `string`<a id="description-string"></a>

Description of the skill.

##### skillCode: `string`<a id="skillcode-string"></a>

The title of the skill.

##### assessmentModel: [`SkillsCreateNewSkillRequestAssessmentModel`](./models/skills-create-new-skill-request-assessment-model.ts)<a id="assessmentmodel-skillscreatenewskillrequestassessmentmodelmodelsskills-create-new-skill-request-assessment-modelts"></a>

##### skillTypeModel: [`SkillsCreateNewSkillRequestSkillTypeModel`](./models/skills-create-new-skill-request-skill-type-model.ts)<a id="skilltypemodel-skillscreatenewskillrequestskilltypemodelmodelsskills-create-new-skill-request-skill-type-modelts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SkillsCreateNewSkillResponse](./models/skills-create-new-skill-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/skill/add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.skills.getSkills`<a id="clayhrskillsgetskills"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSkillsResponse = await clayhr.skills.getSkills();
```

#### 🔄 Return<a id="🔄-return"></a>

[SkillsGetSkillsResponseInner](./models/skills-get-skills-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/skills` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.skills.getUserAssignedSkills`<a id="clayhrskillsgetuserassignedskills"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserAssignedSkillsResponse = await clayhr.skills.getUserAssignedSkills(
  {
    assignedUserID: 1,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### assignedUserID: `number`<a id="assigneduserid-number"></a>

The ID of the user whose skills should be retrieved.

#### 🔄 Return<a id="🔄-return"></a>

[SkillsGetUserAssignedSkillsResponse](./models/skills-get-user-assigned-skills-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/userSkill` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.survey.createItemResponse`<a id="clayhrsurveycreateitemresponse"></a>

Create the item\&#39;s response for a survey

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createItemResponseResponse = await clayhr.survey.createItemResponse({
  assignmentId: 1,
  itemId: 1,
  responseValue: "responseValue_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### assignmentId: `number`<a id="assignmentid-number"></a>

assignmentId

##### itemId: `number`<a id="itemid-number"></a>

itemId

##### responseValue: `string`<a id="responsevalue-string"></a>

responseValue

##### authorization: `string`<a id="authorization-string"></a>

Authorization

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/survey/item/save` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.survey.createResponseByAssignmentId`<a id="clayhrsurveycreateresponsebyassignmentid"></a>

Create a survey response by assignment id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createResponseByAssignmentIdResponse =
  await clayhr.survey.createResponseByAssignmentId({
    assignmentId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### assignmentId: `number`<a id="assignmentid-number"></a>

assignmentId

##### authorization: `string`<a id="authorization-string"></a>

Authorization

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/survey/save` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.survey.detailsByFormId`<a id="clayhrsurveydetailsbyformid"></a>

Get the details of a survey form by form id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const detailsByFormIdResponse = await clayhr.survey.detailsByFormId({
  dynamicFormId: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

Authorization

##### dynamicFormId: `number`<a id="dynamicformid-number"></a>

dynamicFormId

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/survey/view` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.survey.getAllSurveyResponses`<a id="clayhrsurveygetallsurveyresponses"></a>

This page will help you get started with Surveys.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllSurveyResponsesResponse = await clayhr.survey.getAllSurveyResponses(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### surveyId: `number`<a id="surveyid-number"></a>

The ID of the survey.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/survey/allresponses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.survey.getList`<a id="clayhrsurveygetlist"></a>

Get a list of surveys

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await clayhr.survey.getList({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

Authorization

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/survey/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.test.getTest`<a id="clayhrtestgettest"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTestResponse = await clayhr.test.getTest({
  status: "A",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### status: `'A' | 'ARCHV' | 'DRAFT'`<a id="status-a--archv--draft"></a>

The status of test - Choose between [\"A-Active\", \"ARCHV-Archive\", \"DRAFT-Draft\"].

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/test` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.timecards.clockOut`<a id="clayhrtimecardsclockout"></a>

Clock Out

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const clockOutResponse = await clayhr.timecards.clockOut({
  authorization: "authorization_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

Authorization

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timecard/clock/out` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.timecards.createPastTimecard`<a id="clayhrtimecardscreatepasttimecard"></a>

Create a past timecard.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPastTimecardResponse = await clayhr.timecards.createPastTimecard({
  authorization: "authorization_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

Authorization

##### activity: `string`<a id="activity-string"></a>

##### amount: `number`<a id="amount-number"></a>

##### approvalRejectionReason: `string`<a id="approvalrejectionreason-string"></a>

##### billable: `string`<a id="billable-string"></a>

##### cardId: `number`<a id="cardid-number"></a>

##### caseNum: `string`<a id="casenum-string"></a>

##### caseURL: `string`<a id="caseurl-string"></a>

##### categoryCode: `string`<a id="categorycode-string"></a>

##### chargeType: `string`<a id="chargetype-string"></a>

##### cid: `number`<a id="cid-number"></a>

##### createUserID: `number`<a id="createuserid-number"></a>

##### createtsDate: `number`<a id="createtsdate-number"></a>

##### createtsDay: `number`<a id="createtsday-number"></a>

##### createtsHours: `number`<a id="createtshours-number"></a>

##### createtsMinutes: `number`<a id="createtsminutes-number"></a>

##### createtsMonth: `number`<a id="createtsmonth-number"></a>

##### createtsNanos: `number`<a id="createtsnanos-number"></a>

##### createtsSeconds: `number`<a id="createtsseconds-number"></a>

##### createtsTime: `number`<a id="createtstime-number"></a>

##### createtsTimezoneOffset: `number`<a id="createtstimezoneoffset-number"></a>

##### createtsYear: `number`<a id="createtsyear-number"></a>

##### customHours: `string`<a id="customhours-string"></a>

##### date: `string | Date`<a id="date-string--date"></a>

##### description: `string`<a id="description-string"></a>

##### elapsedTimeDate: `number`<a id="elapsedtimedate-number"></a>

##### elapsedTimeDay: `number`<a id="elapsedtimeday-number"></a>

##### elapsedTimeHours: `number`<a id="elapsedtimehours-number"></a>

##### elapsedTimeMinutes: `number`<a id="elapsedtimeminutes-number"></a>

##### elapsedTimeMonth: `number`<a id="elapsedtimemonth-number"></a>

##### elapsedTimeSeconds: `number`<a id="elapsedtimeseconds-number"></a>

##### elapsedTimeTime: `number`<a id="elapsedtimetime-number"></a>

##### elapsedTimeTimezoneOffset: `number`<a id="elapsedtimetimezoneoffset-number"></a>

##### elapsedTimeYear: `number`<a id="elapsedtimeyear-number"></a>

##### endDateTimeDate: `number`<a id="enddatetimedate-number"></a>

##### endDateTimeDay: `number`<a id="enddatetimeday-number"></a>

##### endDateTimeHours: `number`<a id="enddatetimehours-number"></a>

##### endDateTimeMinutes: `number`<a id="enddatetimeminutes-number"></a>

##### endDateTimeMonth: `number`<a id="enddatetimemonth-number"></a>

##### endDateTimeNanos: `number`<a id="enddatetimenanos-number"></a>

##### endDateTimeSeconds: `number`<a id="enddatetimeseconds-number"></a>

##### endDateTimeTime: `number`<a id="enddatetimetime-number"></a>

##### endDateTimeTimezoneOffset: `number`<a id="enddatetimetimezoneoffset-number"></a>

##### endDateTimeYear: `number`<a id="enddatetimeyear-number"></a>

##### endDateTimeStr: `string`<a id="enddatetimestr-string"></a>

##### id: `number`<a id="id-number"></a>

##### invoiceId: `number`<a id="invoiceid-number"></a>

##### notes: `string`<a id="notes-string"></a>

##### numberOfDays: `number`<a id="numberofdays-number"></a>

##### paymentDate: `string | Date`<a id="paymentdate-string--date"></a>

##### projectId: `number`<a id="projectid-number"></a>

##### projectManager: `string`<a id="projectmanager-string"></a>

##### projectModelAccount: `number`<a id="projectmodelaccount-number"></a>

##### ptoComputed: `string`<a id="ptocomputed-string"></a>

##### source: `string`<a id="source-string"></a>

##### startDateTimeDate: `number`<a id="startdatetimedate-number"></a>

##### startDateTimeDay: `number`<a id="startdatetimeday-number"></a>

##### startDateTimeHours: `number`<a id="startdatetimehours-number"></a>

##### startDateTimeMinutes: `number`<a id="startdatetimeminutes-number"></a>

##### startDateTimeMonth: `number`<a id="startdatetimemonth-number"></a>

##### startDateTimeNanos: `number`<a id="startdatetimenanos-number"></a>

##### startDateTimeSeconds: `number`<a id="startdatetimeseconds-number"></a>

##### startDateTimeTime: `number`<a id="startdatetimetime-number"></a>

##### startDateTimeTimezoneOffset: `number`<a id="startdatetimetimezoneoffset-number"></a>

##### startDateTimeYear: `number`<a id="startdatetimeyear-number"></a>

##### startDateTimeStr: `string`<a id="startdatetimestr-string"></a>

##### status: `string`<a id="status-string"></a>

##### sumOfElapsedTime: `string`<a id="sumofelapsedtime-string"></a>

##### timesheetId: `number`<a id="timesheetid-number"></a>

##### timezone: `string`<a id="timezone-string"></a>

##### usedTime: `number`<a id="usedtime-number"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timecard/clockin` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.timecards.createTimecard`<a id="clayhrtimecardscreatetimecard"></a>

Create a new timecard.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTimecardResponse = await clayhr.timecards.createTimecard({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### createtsDate: `number`<a id="createtsdate-number"></a>

##### createtsDay: `number`<a id="createtsday-number"></a>

##### createtsHours: `number`<a id="createtshours-number"></a>

##### createtsMinutes: `number`<a id="createtsminutes-number"></a>

##### createtsMonth: `number`<a id="createtsmonth-number"></a>

##### createtsNanos: `number`<a id="createtsnanos-number"></a>

##### createtsSeconds: `number`<a id="createtsseconds-number"></a>

##### createtsTime: `number`<a id="createtstime-number"></a>

##### createtsTimezoneOffset: `number`<a id="createtstimezoneoffset-number"></a>

##### createtsYear: `number`<a id="createtsyear-number"></a>

##### customHours: `string`<a id="customhours-string"></a>

##### date: `string | Date`<a id="date-string--date"></a>

##### description: `string`<a id="description-string"></a>

##### elapsedTimeDate: `number`<a id="elapsedtimedate-number"></a>

##### elapsedTimeDay: `number`<a id="elapsedtimeday-number"></a>

##### elapsedTimeHours: `number`<a id="elapsedtimehours-number"></a>

##### elapsedTimeMinutes: `number`<a id="elapsedtimeminutes-number"></a>

##### elapsedTimeMonth: `number`<a id="elapsedtimemonth-number"></a>

##### elapsedTimeSeconds: `number`<a id="elapsedtimeseconds-number"></a>

##### elapsedTimeTime: `number`<a id="elapsedtimetime-number"></a>

##### elapsedTimeTimezoneOffset: `number`<a id="elapsedtimetimezoneoffset-number"></a>

##### elapsedTimeYear: `number`<a id="elapsedtimeyear-number"></a>

##### endDateTimeDate: `number`<a id="enddatetimedate-number"></a>

##### endDateTimeDay: `number`<a id="enddatetimeday-number"></a>

##### endDateTimeHours: `number`<a id="enddatetimehours-number"></a>

##### endDateTimeMinutes: `number`<a id="enddatetimeminutes-number"></a>

##### endDateTimeMonth: `number`<a id="enddatetimemonth-number"></a>

##### endDateTimeNanos: `number`<a id="enddatetimenanos-number"></a>

##### endDateTimeSeconds: `number`<a id="enddatetimeseconds-number"></a>

##### endDateTimeTime: `number`<a id="enddatetimetime-number"></a>

##### endDateTimeTimezoneOffset: `number`<a id="enddatetimetimezoneoffset-number"></a>

##### endDateTimeYear: `number`<a id="enddatetimeyear-number"></a>

##### endDateTimeStr: `string`<a id="enddatetimestr-string"></a>

##### id: `number`<a id="id-number"></a>

##### invoiceId: `number`<a id="invoiceid-number"></a>

##### notes: `string`<a id="notes-string"></a>

##### numberOfDays: `number`<a id="numberofdays-number"></a>

##### paymentDate: `string | Date`<a id="paymentdate-string--date"></a>

##### projectId: `number`<a id="projectid-number"></a>

##### projectManager: `string`<a id="projectmanager-string"></a>

##### projectModelAccount: `number`<a id="projectmodelaccount-number"></a>

##### timesheetId: `number`<a id="timesheetid-number"></a>

##### timezone: `string`<a id="timezone-string"></a>

##### usedTime: `number`<a id="usedtime-number"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timecard/addtimecard` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.timecards.getByUserId`<a id="clayhrtimecardsgetbyuserid"></a>

Retrieve timecard details based on User ID with Add Time Cards For Other permission.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByUserIdResponse = await clayhr.timecards.getByUserId({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email: `string`<a id="email-string"></a>

email of the user.

##### guid: `string`<a id="guid-string"></a>

Graphical user ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/user/timecard` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.timecards.getByUserId_0`<a id="clayhrtimecardsgetbyuserid_0"></a>

Retrieve timecard basic details based on User ID with Add Time Cards For Other permission.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByUserId_0Response = await clayhr.timecards.getByUserId_0({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email: `string`<a id="email-string"></a>

email of the user.

##### guid: `string`<a id="guid-string"></a>

Graphical user ID.

#### 🔄 Return<a id="🔄-return"></a>

[TimecardsGetByUserId200Response](./models/timecards-get-by-user-id200-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/user/timecards` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.timecards.getDetailsByTimecardId`<a id="clayhrtimecardsgetdetailsbytimecardid"></a>

Retrieve timecard details based on timecard ID with Add Time Cards For Other permission.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsByTimecardIdResponse =
  await clayhr.timecards.getDetailsByTimecardId({
    timecardId: 1,
    flatcustomfields: false,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### timecardId: `number`<a id="timecardid-number"></a>

Timecard ID of the timecard.

##### flatcustomfields: `boolean`<a id="flatcustomfields-boolean"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/timecards/details/{timecardId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.timecards.getTVCForClockinWithQRCodeUsingCid`<a id="clayhrtimecardsgettvcforclockinwithqrcodeusingcid"></a>

TVC code for clockin with QR Code using cid.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTVCForClockinWithQRCodeUsingCidResponse =
  await clayhr.timecards.getTVCForClockinWithQRCodeUsingCid({
    cid: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cid: `number`<a id="cid-number"></a>

cid

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/verify/tvc` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.timecards.getUserById`<a id="clayhrtimecardsgetuserbyid"></a>

Get timecards by user id.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserByIdResponse = await clayhr.timecards.getUserById({
  authorization: "authorization_example",
  type: "leave",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

Authorization

##### type: `string`<a id="type-string"></a>

type

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timecard` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.timecards.registerDeviceForClockInWithAssetModel`<a id="clayhrtimecardsregisterdeviceforclockinwithassetmodel"></a>

Register device for ClockIn with AssetModel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const registerDeviceForClockInWithAssetModelResponse =
  await clayhr.timecards.registerDeviceForClockInWithAssetModel({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accessories: `string`<a id="accessories-string"></a>

##### acknowledge: `number`<a id="acknowledge-number"></a>

##### assetID: `number`<a id="assetid-number"></a>

##### assetno: `string`<a id="assetno-string"></a>

##### assetstatus: `string`<a id="assetstatus-string"></a>

##### assettype: `string`<a id="assettype-string"></a>

##### purchaseDate: `string | Date`<a id="purchasedate-string--date"></a>

##### selfAssign: `number`<a id="selfassign-number"></a>

##### serialno: `string`<a id="serialno-string"></a>

##### service: `string`<a id="service-string"></a>

##### source: `string`<a id="source-string"></a>

##### specs: `string`<a id="specs-string"></a>

##### supplier: `string`<a id="supplier-string"></a>

##### useStatusCode: `string`<a id="usestatuscode-string"></a>

##### userDomain: `string`<a id="userdomain-string"></a>

##### userMail: `string`<a id="usermail-string"></a>

##### userPassword: `string`<a id="userpassword-string"></a>

##### uuid: `string`<a id="uuid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/register` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.timecards.verifyDeviceWithDeviceUUID`<a id="clayhrtimecardsverifydevicewithdeviceuuid"></a>

Device verification with DeviceUUID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const verifyDeviceWithDeviceUUIDResponse =
  await clayhr.timecards.verifyDeviceWithDeviceUUID({
    deviceUUID: "deviceUUID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### deviceUUID: `string`<a id="deviceuuid-string"></a>

deviceUUID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/verify/device` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.timecards.verifyUserWithUserid`<a id="clayhrtimecardsverifyuserwithuserid"></a>

User verification with userid.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const verifyUserWithUseridResponse =
  await clayhr.timecards.verifyUserWithUserid({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### adpAssociateOID: `string`<a id="adpassociateoid-string"></a>

##### allocation: `number`<a id="allocation-number"></a>

##### appleUserIdentifier: `string`<a id="appleuseridentifier-string"></a>

##### assignments: `string`<a id="assignments-string"></a>

##### authToken: `string`<a id="authtoken-string"></a>

##### calWeekPref: `string`<a id="calweekpref-string"></a>

##### calendarId: `number`<a id="calendarid-number"></a>

##### candidateId: `number`<a id="candidateid-number"></a>

##### careerPathwayId: `number`<a id="careerpathwayid-number"></a>

##### cellPhone: `string`<a id="cellphone-string"></a>

##### cid: `number`<a id="cid-number"></a>

##### countryId: `number`<a id="countryid-number"></a>

##### createtsDate: `number`<a id="createtsdate-number"></a>

##### createtsDay: `number`<a id="createtsday-number"></a>

##### createtsHours: `number`<a id="createtshours-number"></a>

##### createtsMinutes: `number`<a id="createtsminutes-number"></a>

##### createtsMonth: `number`<a id="createtsmonth-number"></a>

##### createtsNanos: `number`<a id="createtsnanos-number"></a>

##### createtsSeconds: `number`<a id="createtsseconds-number"></a>

##### createtsTime: `number`<a id="createtstime-number"></a>

##### createtsTimezoneOffset: `number`<a id="createtstimezoneoffset-number"></a>

##### createtsYear: `number`<a id="createtsyear-number"></a>

##### createuserid: `number`<a id="createuserid-number"></a>

##### thumbnail: `string`<a id="thumbnail-string"></a>

##### timecardPeriodPref: `string`<a id="timecardperiodpref-string"></a>

##### timezone: `string`<a id="timezone-string"></a>

##### tosVersion: `string`<a id="tosversion-string"></a>

##### userCountry: `string`<a id="usercountry-string"></a>

##### userDateFormat: `string`<a id="userdateformat-string"></a>

##### userDateOfBirth: `string | Date`<a id="userdateofbirth-string--date"></a>

##### userDisplayName: `string`<a id="userdisplayname-string"></a>

##### userEndDate: `string | Date`<a id="userenddate-string--date"></a>

##### userName: `string`<a id="username-string"></a>

##### userNameFormat: `string`<a id="usernameformat-string"></a>

##### userType: `string`<a id="usertype-string"></a>

##### view: `boolean`<a id="view-boolean"></a>

##### workerType: `string`<a id="workertype-string"></a>

##### workingDays: `string`<a id="workingdays-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/verify/user` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.timesheets.clockIn`<a id="clayhrtimesheetsclockin"></a>

Allows to clock in.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const clockInResponse = await clayhr.timesheets.clockIn({
  proceedOutsideGeoFence: 0,
  categoryCode: "RG",
  billable: "Y",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### proceedOutsideGeoFence: `number`<a id="proceedoutsidegeofence-number"></a>

To clockin outside geofence

##### description: `string`<a id="description-string"></a>

Description of timecard.

##### projectId: `number`<a id="projectid-number"></a>

Project ID of project.

##### projectManager: `string`<a id="projectmanager-string"></a>

Project Manager corresponding user.

##### categoryCode: `'RG' | 'OT'`<a id="categorycode-rg--ot"></a>

Category of timecard. Choose between [\"Regular\", \"Overtime\"].

##### notes: `string`<a id="notes-string"></a>

Notes.

##### billable: `'Y' | 'N'`<a id="billable-y--n"></a>

Billable or non- billable timecard. Select \'Y\' for billable and \'N\' for non-billable

##### activity: `string`<a id="activity-string"></a>

Activity type of timecard.

##### approvalRejectionReason: `string`<a id="approvalrejectionreason-string"></a>

Reason for approval rejection.

##### clockInLongitude: `number`<a id="clockinlongitude-number"></a>

Longitude value while clocking in.

##### clockInLatitude: `number`<a id="clockinlatitude-number"></a>

Latitude value while clocking in.

##### clockOutLongitude: `number`<a id="clockoutlongitude-number"></a>

Longitude value while clocking out.

##### clockOutLatitude: `number`<a id="clockoutlatitude-number"></a>

Latitude value while clocking out.

##### projectAreaId: `number`<a id="projectareaid-number"></a>

Project area ID of project area.

#### 🔄 Return<a id="🔄-return"></a>

[TimesheetsClockInResponse](./models/timesheets-clock-in-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/timesheet/clockin` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.timesheets.clockOut`<a id="clayhrtimesheetsclockout"></a>

Allows user to clock out.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const clockOutResponse = await clayhr.timesheets.clockOut({
  proceedOutsideGeoFence: 0,
  categoryCode: "RG",
  billable: "Y",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### proceedOutsideGeoFence: `number`<a id="proceedoutsidegeofence-number"></a>

clock out outside geofence

##### description: `string`<a id="description-string"></a>

Description of timecard.

##### projectId: `number`<a id="projectid-number"></a>

Project ID of project.

##### projectManager: `string`<a id="projectmanager-string"></a>

Project Manager corresponding user.

##### categoryCode: `'RG' | 'OT'`<a id="categorycode-rg--ot"></a>

Category of timecard. Choose between [\"Regular\", \"Overtime\"].

##### notes: `string`<a id="notes-string"></a>

Notes.

##### billable: `'Y' | 'N'`<a id="billable-y--n"></a>

Billable or non- billable timecard. Select \'Y\' for billable and \'N\' for non-billable

##### activity: `string`<a id="activity-string"></a>

Activity type of timecard.

##### approvalRejectionReason: `string`<a id="approvalrejectionreason-string"></a>

Reason for approval rejection.

##### clockInLongitude: `number`<a id="clockinlongitude-number"></a>

Longitude value while clocking in.

##### clockInLatitude: `number`<a id="clockinlatitude-number"></a>

Latitude value while clocking in.

##### clockOutLongitude: `number`<a id="clockoutlongitude-number"></a>

Longitude value while clocking out.

##### clockOutLatitude: `number`<a id="clockoutlatitude-number"></a>

Latitude value while clocking out.

##### projectAreaId: `number`<a id="projectareaid-number"></a>

Project area ID of project area.

#### 🔄 Return<a id="🔄-return"></a>

[TimesheetsClockOutResponse](./models/timesheets-clock-out-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/timesheet/clockout` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.timesheets.createOrUpdateTimesheet`<a id="clayhrtimesheetscreateorupdatetimesheet"></a>

Creates a new timesheet and update existing timesheet.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOrUpdateTimesheetResponse =
  await clayhr.timesheets.createOrUpdateTimesheet({
    date: "1970-01-01",
    projectId: 1,
    elapsedTime: "1970-01-01T00:00:00.00Z",
    categoryCode: "RG",
    billable: "Y",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### date: `string | Date`<a id="date-string--date"></a>

Timesheet date.

##### projectId: `number`<a id="projectid-number"></a>

Project ID of project.

##### elapsedTime: `string`<a id="elapsedtime-string"></a>

Elapsed Time of timecard.

##### cardId: `number`<a id="cardid-number"></a>

Timecard Id of timecard.

##### description: `string`<a id="description-string"></a>

Description of timecard.

##### clockedOutsideGeofence: `number`<a id="clockedoutsidegeofence-number"></a>

Clocked in or clocked out outside geofence.

##### projectManager: `string`<a id="projectmanager-string"></a>

Project Manager corresponding user.

##### categoryCode: `'RG' | 'OT'`<a id="categorycode-rg--ot"></a>

Category of timecard. Choose between [\"Regular\", \"Overtime\"].

##### notes: `string`<a id="notes-string"></a>

Notes.

##### billable: `'Y' | 'N'`<a id="billable-y--n"></a>

Billable or non- billable timecard. Select \'Y\' for billable and \'N\' for non-billable

##### activity: `string`<a id="activity-string"></a>

Activity type of timecard.

##### approvalRejectionReason: `string`<a id="approvalrejectionreason-string"></a>

Reason for approval rejection.

##### clockInLongitude: `number`<a id="clockinlongitude-number"></a>

Longitude value while clocking in.

##### clockInLatitude: `number`<a id="clockinlatitude-number"></a>

Latitude value while clocking in.

##### clockOutLongitude: `number`<a id="clockoutlongitude-number"></a>

Longitude value while clocking out.

##### clockOutLatitude: `number`<a id="clockoutlatitude-number"></a>

Latitude value while clocking out.

##### projectAreaId: `number`<a id="projectareaid-number"></a>

Project area ID of project area.

#### 🔄 Return<a id="🔄-return"></a>

[TimesheetsCreateOrUpdateTimesheetResponse](./models/timesheets-create-or-update-timesheet-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/timesheet/save` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.timesheets.deleteByTimesheetId`<a id="clayhrtimesheetsdeletebytimesheetid"></a>

Deletes a timesheet by Timesheet ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByTimesheetIdResponse = await clayhr.timesheets.deleteByTimesheetId(
  {
    timesheetId: 1,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### timesheetId: `number`<a id="timesheetid-number"></a>

Timesheet ID of timesheet.

#### 🔄 Return<a id="🔄-return"></a>

[TimesheetsDeleteByTimesheetIdResponse](./models/timesheets-delete-by-timesheet-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/timesheet/delete` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.timesheets.getActiveAllocations`<a id="clayhrtimesheetsgetactiveallocations"></a>

Retrieve list of active allocations of user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getActiveAllocationsResponse =
  await clayhr.timesheets.getActiveAllocations();
```

#### 🔄 Return<a id="🔄-return"></a>

[TimesheetsGetActiveAllocationsResponse](./models/timesheets-get-active-allocations-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/timesheet/allocations/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.timesheets.getApprovalList`<a id="clayhrtimesheetsgetapprovallist"></a>

Retrieve list of timesheet approvals on the basis of permission.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getApprovalListResponse = await clayhr.timesheets.getApprovalList({
  startDate: "startDate_example",
  endDate: "endDate_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### startDate: `string`<a id="startdate-string"></a>

Start date of the timesheet.

##### endDate: `string`<a id="enddate-string"></a>

End date of the timesheet.

#### 🔄 Return<a id="🔄-return"></a>

[TimesheetsGetApprovalListResponse](./models/timesheets-get-approval-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/timesheet/approvals/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.timesheets.getByTimesheetId`<a id="clayhrtimesheetsgetbytimesheetid"></a>

Retrieve a timesheet by timesheet ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByTimesheetIdResponse = await clayhr.timesheets.getByTimesheetId({
  timesheetId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### timesheetId: `number`<a id="timesheetid-number"></a>

Tmesheet ID of timesheet.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/timesheet` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.timesheets.getByUserId`<a id="clayhrtimesheetsgetbyuserid"></a>

Retrieve a list of timesheets.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByUserIdResponse = await clayhr.timesheets.getByUserId({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### startDate: `string`<a id="startdate-string"></a>

Start date of the timesheet.

##### endDate: `string`<a id="enddate-string"></a>

End date of the timesheet.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/timesheets` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.timesheets.getDetailsByTimesheetId`<a id="clayhrtimesheetsgetdetailsbytimesheetid"></a>

Retrieve timesheet details by Timesheet ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsByTimesheetIdResponse =
  await clayhr.timesheets.getDetailsByTimesheetId({
    timeSheetId: 1,
    flatcustomfields: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### timeSheetId: `number`<a id="timesheetid-number"></a>

Timesheet ID of timesheet.

##### flatcustomfields: `boolean`<a id="flatcustomfields-boolean"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/timesheets/details/{timeSheetId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.timesheets.getPreferencesByCid`<a id="clayhrtimesheetsgetpreferencesbycid"></a>

Retrieve list of timesheet preferences based in cid.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPreferencesByCidResponse =
  await clayhr.timesheets.getPreferencesByCid();
```

#### 🔄 Return<a id="🔄-return"></a>

[TimesheetsGetPreferencesByCidResponse](./models/timesheets-get-preferences-by-cid-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/timesheet/preferences/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.timesheets.getTimecardsByTimesheetId`<a id="clayhrtimesheetsgettimecardsbytimesheetid"></a>

Retrieve a list of timecards.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTimecardsByTimesheetIdResponse =
  await clayhr.timesheets.getTimecardsByTimesheetId({
    startDate: "",
    endDate: "",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### startDate: `string | Date`<a id="startdate-string--date"></a>

Start date of the timesheet.

##### endDate: `string | Date`<a id="enddate-string--date"></a>

End date of the timesheet.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/timecards` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.timesheets.listActivityTypesByCid`<a id="clayhrtimesheetslistactivitytypesbycid"></a>

Retrieve list of activity types based on cid.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listActivityTypesByCidResponse =
  await clayhr.timesheets.listActivityTypesByCid();
```

#### 🔄 Return<a id="🔄-return"></a>

[TimesheetsListActivityTypesByCidResponse](./models/timesheets-list-activity-types-by-cid-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/timesheet/activitytype/list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.timesheets.updateStatusByTimesheetId`<a id="clayhrtimesheetsupdatestatusbytimesheetid"></a>

Update the timesheet status (submit, approve, reject) corresponding to supplied Timesheet ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateStatusByTimesheetIdResponse =
  await clayhr.timesheets.updateStatusByTimesheetId({
    timesheetId: 1,
    status: "AP",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### timesheetId: `number`<a id="timesheetid-number"></a>

Timesheet ID of the timesheet.

##### status: `'PD' | 'PAP' | 'AP' | 'NEW' | 'RJ'`<a id="status-pd--pap--ap--new--rj"></a>

Status of timecard. Choose between [\"PD-Pending for Approval\", \"PAP-Partially Approved\", \"AP-Fully Approved\",\"NEW-New Timesheet\",\"RJ-Rejected\"].

##### comments: `string`<a id="comments-string"></a>

Comments

#### 🔄 Return<a id="🔄-return"></a>

[TimesheetsUpdateStatusByTimesheetIdResponse](./models/timesheets-update-status-by-timesheet-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/timesheet/update` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.trainings.getByUserId`<a id="clayhrtrainingsgetbyuserid"></a>

Retrieve trainings by user ID

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByUserIdResponse = await clayhr.trainings.getByUserId();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/trainings` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.trainings.getTrainingContentByTrainingId`<a id="clayhrtrainingsgettrainingcontentbytrainingid"></a>

Retrieve training content by training ID

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTrainingContentByTrainingIdResponse =
  await clayhr.trainings.getTrainingContentByTrainingId({
    trainingId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### trainingId: `number`<a id="trainingid-number"></a>

trainingId

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/training/content` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.trainings.synchronizeWithTalentLMS`<a id="clayhrtrainingssynchronizewithtalentlms"></a>

Sync with talent LMS

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const synchronizeWithTalentLMSResponse =
  await clayhr.trainings.synchronizeWithTalentLMS({
    redirectUrl: "redirectUrl_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### redirectUrl: `string`<a id="redirecturl-string"></a>

redirectUrl

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/training/talentlms/sync` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.trainings.updateUserStatus`<a id="clayhrtrainingsupdateuserstatus"></a>

Update training status for user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateUserStatusResponse = await clayhr.trainings.updateUserStatus({
  status: "status_example",
  userTrainingId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### status: `string`<a id="status-string"></a>

Status of the user training.

##### userTrainingId: `number`<a id="usertrainingid-number"></a>

The ID of the user training.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/training/status/update` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.userPtoPolicies.getPolicies`<a id="clayhruserptopoliciesgetpolicies"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPoliciesResponse = await clayhr.userPtoPolicies.getPolicies();
```

#### 🔄 Return<a id="🔄-return"></a>

[UserPtoPoliciesGetPoliciesResponse](./models/user-pto-policies-get-policies-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v3/user/pto` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.userPtoPolicies.listPtoPolicies`<a id="clayhruserptopolicieslistptopolicies"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listPtoPoliciesResponse = await clayhr.userPtoPolicies.listPtoPolicies();
```

#### 🔄 Return<a id="🔄-return"></a>

[UserPtoPoliciesListPtoPoliciesResponse](./models/user-pto-policies-list-pto-policies-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ptopolicies` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.userWorkflow.assignWorkflowToUser`<a id="clayhruserworkflowassignworkflowtouser"></a>

This page will help you get started with Assign Workflow to User.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const assignWorkflowToUserResponse =
  await clayhr.userWorkflow.assignWorkflowToUser({
    workflowId: 1,
    assigneeUserId: 1,
    coordinatorUserId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workflowId: `number`<a id="workflowid-number"></a>

The ID of the workflow.

##### assigneeUserId: `number`<a id="assigneeuserid-number"></a>

The ID of Workflow Assignee.

##### coordinatorUserId: `number`<a id="coordinatoruserid-number"></a>

The ID of Workflow Coordinator.

##### comment: `string`<a id="comment-string"></a>

Comment of the workflow.

#### 🔄 Return<a id="🔄-return"></a>

[UserWorkflowAssignWorkflowToUserResponse](./models/user-workflow-assign-workflow-to-user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/userworkflow/assign/{workflowId}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.workflows.createNewTask`<a id="clayhrworkflowscreatenewtask"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewTaskResponse = await clayhr.workflows.createNewTask([{}]);
```

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`TaskModel`](./models/task-model.ts)[]

task object to create a new task

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/task/add` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.workflows.getTaskDetailsByTaskId`<a id="clayhrworkflowsgettaskdetailsbytaskid"></a>

Get the details of a workflow task by task id.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTaskDetailsByTaskIdResponse =
  await clayhr.workflows.getTaskDetailsByTaskId({
    taskid: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskid: `number`<a id="taskid-number"></a>

taskid

##### authorization: `string`<a id="authorization-string"></a>

Authorization

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/task/{taskid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.workflows.getTasksByUserId`<a id="clayhrworkflowsgettasksbyuserid"></a>

Get tasks by user id.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTasksByUserIdResponse = await clayhr.workflows.getTasksByUserId();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/tasks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.workflows.getUserWorkflows`<a id="clayhrworkflowsgetuserworkflows"></a>

Get workflows by user id.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserWorkflowsResponse = await clayhr.workflows.getUserWorkflows({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

Authorization

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/userworkflows` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.workflows.getWorkflows`<a id="clayhrworkflowsgetworkflows"></a>

Get workflows.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWorkflowsResponse = await clayhr.workflows.getWorkflows({
  status: "A",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### status: `string`<a id="status-string"></a>

status

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/workflows` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.workflows.listTasksByUserworkflowId`<a id="clayhrworkflowslisttasksbyuserworkflowid"></a>

Get tasks by userworkflowid.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTasksByUserworkflowIdResponse =
  await clayhr.workflows.listTasksByUserworkflowId({
    userworkflowid: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userworkflowid: `number`<a id="userworkflowid-number"></a>

userworkflowid

##### authorization: `string`<a id="authorization-string"></a>

Authorization

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/userworkflows/{userworkflowid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clayhr.workflows.updateStatusTask`<a id="clayhrworkflowsupdatestatustask"></a>

Update status workflow task.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateStatusTaskResponse = await clayhr.workflows.updateStatusTask({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

Authorization

##### appraisalId: `number`<a id="appraisalid-number"></a>

##### assignedUserId: `number`<a id="assigneduserid-number"></a>

##### ci: `boolean`<a id="ci-boolean"></a>

##### cid: `number`<a id="cid-number"></a>

##### createUserId: `number`<a id="createuserid-number"></a>

##### createts: `string | Date`<a id="createts-string--date"></a>

##### description: `string`<a id="description-string"></a>

##### dueDate: `string | Date`<a id="duedate-string--date"></a>

##### lastEdit: `string`<a id="lastedit-string"></a>

##### launchtsDate: `number`<a id="launchtsdate-number"></a>

##### launchtsDay: `number`<a id="launchtsday-number"></a>

##### launchtsHours: `number`<a id="launchtshours-number"></a>

##### launchtsMinutes: `number`<a id="launchtsminutes-number"></a>

##### launchtsMonth: `number`<a id="launchtsmonth-number"></a>

##### launchtsNanos: `number`<a id="launchtsnanos-number"></a>

##### launchtsSeconds: `number`<a id="launchtsseconds-number"></a>

##### launchtsTime: `number`<a id="launchtstime-number"></a>

##### launchtsTimezoneOffset: `number`<a id="launchtstimezoneoffset-number"></a>

##### launchtsYear: `number`<a id="launchtsyear-number"></a>

##### phasename: `string`<a id="phasename-string"></a>

##### projectId: `number`<a id="projectid-number"></a>

##### recruitId: `number`<a id="recruitid-number"></a>

##### statusCode: `string`<a id="statuscode-string"></a>

##### systemTask: `number`<a id="systemtask-number"></a>

##### taskId: `number`<a id="taskid-number"></a>

##### taskUID: `number`<a id="taskuid-number"></a>

##### title: `string`<a id="title-string"></a>

##### transitionName: `string`<a id="transitionname-string"></a>

##### type: `string`<a id="type-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/task/update/status` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)

import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY_DETAILS } from '../getQueries';
import { useLocation, Link } from 'react-router-dom';
import "../repoDetails.css"
function RepositoryDetails() {

    const location = useLocation();
    const routeName = location?.pathname.split('/');
    console.log(routeName,"routeName")

    const { loading, error, data } = useQuery(GET_REPOSITORY_DETAILS, {
        variables: { owner: routeName[2], name: routeName[3] },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const { repositoryDetails } = data;
    console.log(repositoryDetails,"helloo")

    return (
        <>
        <div className="repository-detail">
            <span><Link to={`/`} > Back</Link></span>
            <br></br>
            <br></br>
            <span style={{fontWeight:'bolder',fontSize:'25px'}}>Details For {repositoryDetails.name} Repository</span>
            <br></br>
            <br></br>

           <div class="table-container">
           <table>
               <tr>
                   <th><h2>Repository Details</h2></th>
               </tr>
               <tr>
                   <td>
            <p>Name: {repositoryDetails.name}</p>
                   </td>
               </tr>
               <tr>
                   <td>
            <p>Owner: {repositoryDetails.owner}</p>

                   </td>
               </tr>
               <tr>
                   <td>
            <p>Size: {repositoryDetails.size}</p>

                   </td>
               </tr>
               <tr>
                   <td> 
            <p>Is Private: {repositoryDetails.isPrivate ? 'Yes' : 'No'}</p>

                   </td>
               </tr>
               <tr>
                   <td> 
                   <p>Number of Files: {repositoryDetails.numFiles}</p>

                   </td>
               </tr>
               <tr>
                   <td> 
                   <p>Active Webhooks: {repositoryDetails.activeWebhooks ?repositoryDetails.activeWebhooks:"N/A" }</p>

                   </td>
               </tr>
               <tr>
                   <td> 
                   <p>YAML Content:</p>
            <code>{repositoryDetails.ymlContent ? repositoryDetails.ymlContent:"N/A" }</code>
                   </td>
               </tr>
           </table>
       </div>
       </div>

       </>
    );
}

export default RepositoryDetails;
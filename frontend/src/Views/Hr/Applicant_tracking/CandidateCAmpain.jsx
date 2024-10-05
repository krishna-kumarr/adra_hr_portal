import React from 'react'
import { GoPlus } from 'react-icons/go'

const CandidateCAmpain = () => {
    return (
        <main className="col-xl-12 ">
            <div className="container-fluid">
                <div className='text-end'>
                    <button type="button" className='btn btn-primary'>
                        <GoPlus className='me-1 fs-5' />
                        Create campain
                    </button>
                </div>
            </div>
        </main>
    )
}

export default CandidateCAmpain